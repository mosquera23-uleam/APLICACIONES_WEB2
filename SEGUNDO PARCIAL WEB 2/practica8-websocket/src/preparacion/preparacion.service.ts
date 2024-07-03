// src/preparacion.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preparacion } from './preparacion.entity';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

@Injectable()
export class PreparacionService {
  constructor(
    @InjectRepository(Preparacion)
    private preparacionRepository: Repository<Preparacion>,
  ) {}

  async create(
    createPreparacionDto: CreatePreparacionDto,
  ): Promise<Preparacion> {
    const preparacion = this.preparacionRepository.create(createPreparacionDto);
    return await this.preparacionRepository.save(preparacion);
  }

  async findAll(): Promise<Preparacion[]> {
    return this.preparacionRepository.find();
  }

  async update(
    id: number,
    updatePreparacionDto: UpdatePreparacionDto,
  ): Promise<Preparacion> {
    await this.preparacionRepository.update(id, updatePreparacionDto);
    return this.preparacionRepository.findOne({ where: { id } });
  }
}
