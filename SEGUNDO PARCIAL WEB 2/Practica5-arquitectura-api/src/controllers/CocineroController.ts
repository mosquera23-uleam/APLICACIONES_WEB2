// src/controllers/CocineroController.ts
import { Request, Response } from 'express';
import CocineroRepository from '../repositories/CocineroRepository';

class CocineroController {
  async getAll(req: Request, res: Response) {
    const cocineros = await CocineroRepository.getAll();
    res.json(cocineros);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const cocinero = await CocineroRepository.getById(id);
    res.json(cocinero);
  }

  async create(req: Request, res: Response) {
    const cocinero = await CocineroRepository.create(req.body);
    res.json(cocinero);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const cocinero = await CocineroRepository.update(id, req.body);
    res.json(cocinero);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await CocineroRepository.delete(id);
    res.sendStatus(204);
  }
}

export default new CocineroController();
