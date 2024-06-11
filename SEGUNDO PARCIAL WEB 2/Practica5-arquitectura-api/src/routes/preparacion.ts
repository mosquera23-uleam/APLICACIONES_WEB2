// src/routes/preparacion.ts
import { Router } from 'express';
import PreparacionController from '../controllers/PreparacionController';

const router = Router();

router.get('/', PreparacionController.getAll);
router.get('/:id', PreparacionController.getById);
router.post('/', PreparacionController.create);
router.put('/:id', PreparacionController.update);
router.delete('/:id', PreparacionController.delete);

export default router;
