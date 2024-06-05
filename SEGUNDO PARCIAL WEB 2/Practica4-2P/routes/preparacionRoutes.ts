import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Preparacion routes
router.get('/', async (req, res) => {
    const preparaciones = await prisma.preparacion.findMany({
      where: { estado: 'Activo' }
    });
    res.json(preparaciones);
  });

  // Ruta para obtener una preparacion por su ID
router.get('/:id', async (req, res) => {
        const { id } = req.params;
        const preparacion = await prisma.preparacion.findUnique({
        where: { id: Number(id) }
        });
        res.json(preparacion);
    });
  
    // Ruta para crear una nueva preparacion
router.post('/', async (req, res) => {
    const { fecha, hora, cantidadProductos, costo, tiempoEstimado, cocineroId, recetaId } = req.body;
    const preparacion = await prisma.preparacion.create({
      data: {
        cantidadProductos,
        costo,
        tiempoEstimado,
        cocineroId,
        recetaId
      }
    });
    res.json(preparacion);
  });

    // Ruta para actualizar una preparacion por su ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { fecha, hora, cantidadProductos, costo, tiempoEstimado, cocineroId, recetaId, estado } = req.body;
    const preparacion = await prisma.preparacion.update({
      where: { id: Number(id) },
      data: {
        fecha: new Date(fecha),
        hora: new Date(hora),
        cantidadProductos,
        costo,
        tiempoEstimado,
        cocineroId,
        recetaId,
        estado
      }
    });
    res.json(preparacion);
  });
 
  
    // Ruta para eliminar una preparacion por su ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const preparacion = await prisma.preparacion.update({
      where: { id: Number(id) },
      data: { estado: 'Eliminado' }
    });
    res.json(preparacion);
  });

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as preparacionRoutes };
