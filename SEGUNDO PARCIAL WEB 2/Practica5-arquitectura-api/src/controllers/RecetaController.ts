// src/controllers/RecetaController.ts
import { Request, Response } from 'express';
import RecetaRepository from '../repositories/RecetaRepository';

class RecetaController {
  async getAll(req: Request, res: Response) {
    const recetas = await RecetaRepository.getAll();
    res.json(recetas);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const receta = await RecetaRepository.getById(id);
    res.json(receta);
  }

  async create(req: Request, res: Response) {
    const receta = await RecetaRepository.create(req.body);
    res.json(receta);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const receta = await RecetaRepository.update(id, req.body);
    res.json(receta);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await RecetaRepository.delete(id);
    res.sendStatus(204);
  }
}

export default new RecetaController();
