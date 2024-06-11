// src/routes/receta.ts
import { Router } from 'express';
import RecetaController from '../controllers/RecetaController';

const router = Router();

router.get('/', RecetaController.getAll);
router.get('/:id', RecetaController.getById);
router.post('/', RecetaController.create);
router.put('/:id', RecetaController.update);
router.delete('/:id', RecetaController.delete);

export default router;
