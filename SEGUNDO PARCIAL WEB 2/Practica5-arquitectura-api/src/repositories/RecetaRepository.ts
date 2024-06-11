// src/repositories/RecetaRepository.ts
import prisma from '../datasources/prisma';
import { Receta } from '../entities/Receta';

class RecetaRepository {
  async getAll(): Promise<Receta[]> {
    return await prisma.receta.findMany();
  }

  async getById(id: number): Promise<Receta | null> {
    return await prisma.receta.findUnique({ where: { id } });
  }

  async create(data: Omit<Receta, 'id'>): Promise<Receta> {
    return await prisma.receta.create({ data : { id: 0, ...data }});
  }

  async update(id: number, data: Partial<Receta>): Promise<Receta> {
    return await prisma.receta.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.receta.delete({ where: { id } });
  }
}

export default new RecetaRepository();
