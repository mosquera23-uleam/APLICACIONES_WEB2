import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';
import { Preparacion } from './entities/preparacion.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';
import { Receta } from '../receta/entities/receta.entity';

@Injectable()
export class PreparacionService {
  constructor(
    @InjectRepository(Preparacion)
    private preparacionRepository: Repository<Preparacion>,
    @InjectRepository(Cocinero)
    private cocineroRepository: Repository<Cocinero>,
    @InjectRepository(Receta)
    private recetaRepository: Repository<Receta>,
  ) {}

  async create(
    createPreparacionInput: CreatePreparacionInput,
  ): Promise<Preparacion> {
    const cocinero = await this.cocineroRepository.findOneBy({
      id: createPreparacionInput.cocineroId,
    });
    const receta = await this.recetaRepository.findOneBy({
      id: createPreparacionInput.recetaId,
    });

    const preparacion = this.preparacionRepository.create({
      ...createPreparacionInput,
      cocinero,
      receta,
    });
    return this.preparacionRepository.save(preparacion);
  }

  findAll(showDeleted = false): Promise<Preparacion[]> {
    if (showDeleted) {
      return this.preparacionRepository.find({
        relations: ['cocinero', 'receta'],
      });
    }
    return this.preparacionRepository.find({
      where: { estado: true },
      relations: ['cocinero', 'receta'],
    });
  }

  findOnlyDeleted(): Promise<Preparacion[]> {
    return this.preparacionRepository.find({
      where: { estado: false },
      relations: ['cocinero', 'receta'],
    });
  }

  findOne(id: number): Promise<Preparacion> {
    return this.preparacionRepository.findOne({
      where: { id },
      relations: ['cocinero', 'receta'],
    });
  }

  async update(
    id: number,
    updatePreparacionInput: UpdatePreparacionInput,
  ): Promise<Preparacion> {
    const preparacion = await this.preparacionRepository.preload({
      id,
      ...updatePreparacionInput,
    });
    return this.preparacionRepository.save(preparacion);
  }

  async remove(id: number): Promise<Preparacion> {
    const preparacion = await this.preparacionRepository.findOne({
      where: { id },
    });
    if (!preparacion) {
      throw new NotFoundException(`Preparacion with ID ${id} not found`);
    }
    preparacion.estado = false;
    return this.preparacionRepository.save(preparacion);
  }

  async restore(id: number): Promise<Preparacion> {
    const preparacion = await this.preparacionRepository.findOne({
      where: { id },
    });
    if (!preparacion) {
      throw new NotFoundException(`Preparacion with ID ${id} not found`);
    }
    preparacion.estado = true;
    return this.preparacionRepository.save(preparacion);
  }
}
