// src/controllers/PreparacionController.ts
import { Request, Response } from 'express';
import PreparacionRepository from '../repositories/PreparacionRepository';

class PreparacionController {
  async getAll(req: Request, res: Response) {
    const preparaciones = await PreparacionRepository.getAll();
    res.json(preparaciones);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const preparacion = await PreparacionRepository.getById(id);
    res.json(preparacion);
  }

  async create(req: Request, res: Response) {
    const preparacion = await PreparacionRepository.create(req.body);
    res.json(preparacion);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const preparacion = await PreparacionRepository.update(id, req.body);
    res.json(preparacion);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await PreparacionRepository.delete(id);
    res.sendStatus(204);
  }
}

export default new PreparacionController();
