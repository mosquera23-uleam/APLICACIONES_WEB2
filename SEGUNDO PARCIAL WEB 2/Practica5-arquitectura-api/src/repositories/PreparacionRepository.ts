// src/repositories/PreparacionRepository.ts
import prisma from '../datasources/prisma';
import { Preparacion } from '../entities/Preparacion';

class PreparacionRepository {
  async getAll(): Promise<Preparacion[]> {
    return await prisma.preparacion.findMany();
  }

  async getById(id: number): Promise<Preparacion | null> {
    return await prisma.preparacion.findUnique({ where: { id } });
  }

  async create(data: Omit<Preparacion, 'id'>): Promise<Preparacion> {
    return await prisma.preparacion.create({ data: { id: 0, ...data } });
  }

  async update(id: number, data: Partial<Preparacion>): Promise<Preparacion> {
    return await prisma.preparacion.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.preparacion.delete({ where: { id } });
  }
}

export default new PreparacionRepository();
