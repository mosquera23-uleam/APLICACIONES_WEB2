import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Receta routes
router.get('/', async (req, res) => {
    const recetas = await prisma.receta.findMany({
      where: { estado: 'Activo' }
    });
    res.json(recetas);
  });


  // Ruta para obtener una receta por su ID
router.get('/:id', async (req, res) => {
        const { id } = req.params;
        const receta = await prisma.receta.findUnique({
        where: { id: Number(id) }
        });
        res.json(receta);
    });
  
    // Ruta para crear una nueva receta
router.post('/', async (req, res) => {
    const { nombrePlato, ingredientes } = req.body;
    const receta = await prisma.receta.create({
      data: { nombrePlato, ingredientes }
    });
    res.json(receta);
  });


    // Ruta para actualizar una receta por su ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombrePlato, ingredientes, estado } = req.body;
    const receta = await prisma.receta.update({
      where: { id: Number(id) },
      data: { nombrePlato, ingredientes, estado }
    });
    res.json(receta);
  });

// Ruta para eliminar una receta por su ID 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const receta = await prisma.receta.update({
      where: { id: Number(id) },
      data: { estado: 'Eliminado' }
    });
    res.json(receta);
  });

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as recetaRoutes };

