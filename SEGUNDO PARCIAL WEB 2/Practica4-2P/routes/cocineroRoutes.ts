import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Cocinero routes
router.get('/', async (req, res) => {
    const cocineros = await prisma.cocinero.findMany({
      where: { estado: 'Activo' }
    });
    res.json(cocineros);
  });
// Ruta para obtener un cocinero por su ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cocinero = await prisma.cocinero.findUnique({
      where: { id: Number(id) }
    });
    res.json(cocinero);
  });
// Ruta para crear un nuevo cocinero
router.post('/', async (req, res) => {
    const { nombre, sueldoBasico } = req.body;
    const cocinero = await prisma.cocinero.create({
      data: { nombre, sueldoBasico }
    });
    res.json(cocinero);
  });
// Ruta para actualizar un cocinero por su ID 
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, sueldoBasico, estado } = req.body;
    const cocinero = await prisma.cocinero.update({
      where: { id: Number(id) },
      data: { nombre, sueldoBasico, estado }
    });
    res.json(cocinero);
  });

// Ruta para eliminar un cocinero por su ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const cocinero = await prisma.cocinero.update({
      where: { id: Number(id) },
      data: { estado: 'Eliminado' }
    });
    res.json(cocinero);
  });
  

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as cocineroRoutes };
