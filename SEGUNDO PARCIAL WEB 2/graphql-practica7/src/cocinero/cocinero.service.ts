import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';
import { Cocinero } from './entities/cocinero.entity';

@Injectable()
export class CocineroService {
  constructor(
    @InjectRepository(Cocinero)
    private cocineroRepository: Repository<Cocinero>,
  ) {}

  create(createCocineroInput: CreateCocineroInput): Promise<Cocinero> {
    const cocinero = this.cocineroRepository.create(createCocineroInput);
    return this.cocineroRepository.save(cocinero);
  }

  findAll(showDeleted: boolean): Promise<Cocinero[]> {
    if (showDeleted) {
      return this.cocineroRepository.find();
    }
    return this.cocineroRepository.find({ where: { estado: true } });
  }

  findOnlyDeleted(): Promise<Cocinero[]> {
    return this.cocineroRepository.find({ where: { estado: false } });
  }

  findOne(id: number): Promise<Cocinero> {
    return this.cocineroRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCocineroInput: UpdateCocineroInput,
  ): Promise<Cocinero> {
    await this.cocineroRepository.update(id, updateCocineroInput);
    return this.cocineroRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Cocinero> {
    const cocinero = await this.cocineroRepository.findOne({ where: { id } });
    if (!cocinero) {
      throw new NotFoundException(`Cocinero with ID ${id} not found`);
    }
    cocinero.estado = false;
    return this.cocineroRepository.save(cocinero);
  }

  async restore(id: number): Promise<Cocinero> {
    const cocinero = await this.cocineroRepository.findOne({ where: { id } });
    if (!cocinero) {
      throw new NotFoundException(`Cocinero with ID ${id} not found`);
    }
    cocinero.estado = true;
    return this.cocineroRepository.save(cocinero);
  }
}
