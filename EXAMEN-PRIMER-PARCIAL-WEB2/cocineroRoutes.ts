import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Ruta para obtener todos los cocineros activos
router.get('/', async (req, res) => {
  try {
    const cocineros = await prisma.cocinero.findMany({
      where: { estado: 'Activo' }
    });
    res.json(cocineros);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// Ruta para obtener un cocinero por su ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cocinero = await prisma.cocinero.findUnique({
      where: { id: Number(id) }
    });
    if (cocinero) {
      res.json(cocinero);
    } else {
      res.status(404).json({ error: 'Cocinero no encontrado' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// Ruta para crear un nuevo cocinero
router.post('/', async (req, res) => {
  try {
    const { nombre, sueldoBasico } = req.body;
    const cocineroSequence = await prisma.secuencia.update({
      where: { nombre: 'cocinero' },
      data: { secuencia: { increment: 1 } },
    });
    const cocinero = await prisma.cocinero.create({
      data: { 
        id: cocineroSequence.secuencia,
        nombre, 
        sueldoBasico 
      }
    });
    res.json(cocinero);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// Ruta para actualizar un cocinero por su ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, sueldoBasico, estado } = req.body;
    const cocinero = await prisma.cocinero.update({
      where: { id: Number(id) },
      data: { nombre, sueldoBasico, estado }
    });
    res.json(cocinero);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// Ruta para eliminar un cocinero por su ID (cambiar su estado a 'Eliminado')
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cocinero = await prisma.cocinero.update({
      where: { id: Number(id) },
      data: { estado: 'Eliminado' }
    });
    res.json(cocinero);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as cocineroRoutes };
