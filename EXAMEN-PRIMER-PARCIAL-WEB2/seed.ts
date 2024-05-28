import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear secuencias iniciales si no existen
  await prisma.secuencia.createMany({
    data: [
      { nombre: 'cocinero', secuencia: 1 },
      { nombre: 'receta', secuencia: 1 },
      { nombre: 'preparacion', secuencia: 1 },
    ],
    skipDuplicates: true, // Omitir si ya existen
  });

  // Obtener y mostrar las secuencias
  const secuencias = await prisma.secuencia.findMany();
  console.log('Secuencias:', secuencias);

  // Ejemplo de creación de un nuevo cocinero con un ID de secuencia
  const cocineroSequence = await prisma.secuencia.update({
    where: { nombre: 'cocinero' },
    data: { secuencia: { increment: 1 } },
  });

  const newCocinero = await prisma.cocinero.create({
    data: {
      id: cocineroSequence.secuencia,
      nombre: 'Luis Menendez',
      sueldoBasico: 450,
      estado: 'Activo',
    },
  });

  console.log('Nuevo Cocinero:', newCocinero);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
