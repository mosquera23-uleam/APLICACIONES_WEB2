import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';
import { Receta } from './entities/receta.entity';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta)
    private recetaRepository: Repository<Receta>,
  ) {}

  create(createRecetaInput: CreateRecetaInput): Promise<Receta> {
    const receta = this.recetaRepository.create(createRecetaInput);
    return this.recetaRepository.save(receta);
  }

  findAll(showDeleted = false): Promise<Receta[]> {
    if (showDeleted) {
      return this.recetaRepository.find();
    }
    return this.recetaRepository.find({ where: { estado: true } });
  }

  findOnlyDeleted(): Promise<Receta[]> {
    return this.recetaRepository.find({ where: { estado: false } });
  }

  findOne(id: number): Promise<Receta> {
    return this.recetaRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateRecetaInput: UpdateRecetaInput,
  ): Promise<Receta> {
    await this.recetaRepository.update(id, updateRecetaInput);
    return this.recetaRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<Receta> {
    const receta = await this.recetaRepository.findOneBy({ id });
    if (!receta) {
      throw new NotFoundException(`Receta with ID ${id} not found`);
    }
    receta.estado = false;
    return this.recetaRepository.save(receta);
  }

  async restore(id: number): Promise<Receta> {
    const receta = await this.recetaRepository.findOneBy({ id });
    if (!receta) {
      throw new NotFoundException(`Receta with ID ${id} not found`);
    }
    receta.estado = true;
    return this.recetaRepository.save(receta);
  }
}
