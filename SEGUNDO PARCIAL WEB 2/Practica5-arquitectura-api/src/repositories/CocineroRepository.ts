// src/repositories/CocineroRepository.ts
import prisma from '../datasources/prisma';
import { Cocinero } from '../entities/Cocinero';

class CocineroRepository {
  async getAll(): Promise<Cocinero[]> {
    return await prisma.cocinero.findMany();
  }

  async getById(id: number): Promise<Cocinero | null> {
    return await prisma.cocinero.findUnique({ where: { id } });
  }

  async create(data: Omit<Cocinero, 'id'>): Promise<Cocinero> {
    return await prisma.cocinero.create({ data: { id: 0, ...data } });
  }

  async update(id: number, data: Partial<Cocinero>): Promise<Cocinero> {
    return await prisma.cocinero.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.cocinero.delete({ where: { id } });
  }
}

export default new CocineroRepository();
