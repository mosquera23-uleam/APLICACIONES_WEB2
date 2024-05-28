import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedData() {
  try {
    // Agregar un cocinero
    const cocinero = await prisma.cocinero.create({
        data: {
            id: 6, // Add the "id" property with a value
            nombre: 'Marcos Perez',
            sueldoBasico: 2000,
            estado: 'Activo',
        },
    });

    // Agregar una receta
    const receta = await prisma.receta.create({
        data: {
            id: 6, // Add the "id" property with a value
            nombrePlato: 'Carne',
            ingredientes: 'Harina, tomate, queso',
            estado: 'Activo',
        },
    });

    // Agregar una preparacion
    const preparacion = await prisma.preparacion.create({
        data: {
            id: 6, // Add the "id" property with a value
            cantidadProductos: 10,
            costo: 50,
            tiempoEstimado: '40 minutos',
            cocineroId: cocinero.id,
            recetaId: receta.id,
            estado: 'Activo',
        },
    });

    console.log('Datos agregados correctamente:', cocinero, receta, preparacion);
  } catch (error) {
    console.error('Error al agregar datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
