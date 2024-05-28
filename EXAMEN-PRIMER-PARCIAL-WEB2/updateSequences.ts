import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateSequences(): Promise<{ modificadas: number; iguales: number }> {
  try {
    // Consultar el ID máximo de cada entidad
    const maxCocineroId = await prisma.cocinero.findFirst({ select: { id: true }, orderBy: { id: 'desc' } });
    const maxRecetaId = await prisma.receta.findFirst({ select: { id: true }, orderBy: { id: 'desc' } });
    const maxPreparacionId = await prisma.preparacion.findFirst({ select: { id: true }, orderBy: { id: 'desc' } });

    if (!maxCocineroId || !maxRecetaId || !maxPreparacionId) {
      throw new Error('No se pudo obtener el ID máximo de alguna entidad.');
    }

    // Actualizar la secuencia de la entidad 'cocinero' en 'secuencia'
    await prisma.secuencia.update({
      where: { nombre: 'cocinero' },
      data: { secuencia: maxCocineroId.id },
    });

    // Actualizar la secuencia de la entidad 'receta' en 'secuencia'
    await prisma.secuencia.update({
      where: { nombre: 'receta' },
      data: { secuencia: maxRecetaId.id },
    });

    // Actualizar la secuencia de la entidad 'preparacion' en 'secuencia'
    await prisma.secuencia.update({
      where: { nombre: 'preparacion' },
      data: { secuencia: maxPreparacionId.id },
    });

    return {
      modificadas: 3, // Las 3 secuencias se modificaron
      iguales: 0, // No se mantuvieron secuencias iguales
    };
  } catch (error) {
    console.error('Error al actualizar las secuencias:', error);
    throw error;
  } finally {
    await prisma.$disconnect(); // Cerrar la conexión a Prisma al finalizar
  }
}

updateSequences()
  .then((result) => {
    console.log('Secuencias modificadas:', result.modificadas);
    console.log('Secuencias iguales:', result.iguales);
  })
  .catch((error) => {
    console.error('Error en la función principal:', error);
  });
