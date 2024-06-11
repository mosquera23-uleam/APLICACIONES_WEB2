// src/routes/cocinero.ts
import { Router } from 'express';
import CocineroController from '../controllers/CocineroController';

const router = Router();

router.get('/', CocineroController.getAll);
router.get('/:id', CocineroController.getById);
router.post('/', CocineroController.create);
router.put('/:id', CocineroController.update);
router.delete('/:id', CocineroController.delete);

export default router;
