import { Cocinero, Receta, Preparacion } from './models';

// Funciones para eliminar y recuperar

export async function eliminarTransaccion(idTransaccion: string): Promise<void> {
  await Preparacion.findByIdAndUpdate(idTransaccion, { estado: false });
}

export async function recuperarTransaccion(idTransaccion: string): Promise<void> {
  await Preparacion.findByIdAndUpdate(idTransaccion, { estado: true });
}

// Ejemplo de cómo agregar registros

export async function agregarRegistros(): Promise<void> {
  // Agregar cocineros
  await Cocinero.create({ nombre: 'Juan', sueldoBasico: 2000 });
  await Cocinero.create({ nombre: 'Maria', sueldoBasico: 1800 });
  await Cocinero.create({ nombre: 'Pedro', sueldoBasico: 2200 });

  // Agregar recetas
  await Receta.create({ nombrePlato: 'Spaghetti', ingredientes: ['pasta', 'salsa', 'queso'], cantidades: [200, 500, 100] });
  await Receta.create({ nombrePlato: 'Ensalada César', ingredientes: ['lechuga', 'pollo', 'aderezo'], cantidades: [300, 200, 50] });
  await Receta.create({ nombrePlato: 'Sushi', ingredientes: ['arroz', 'pescado', 'alga nori'], cantidades: [400, 300, 50] });

  // Agregar preparaciones
  await Preparacion.create({
    idMesero: '123456',
    idReceta: 'abcdef',
    fecha: new Date(),
    hora: '13:00',
    cantidadProductos: 10,
    costo: 100,
    tiempoEstimado: 30,
    estado: true,
  });
  await Preparacion.create({
    idMesero: '654321',
    idReceta: 'fedcba',
    fecha: new Date(),
    hora: '18:00',
    cantidadProductos: 15,
    costo: 120,
    tiempoEstimado: 40,
    estado: true,
  });
  await Preparacion.create({
    idMesero: '135724',
    idReceta: 'bcadef',
    fecha: new Date(),
    hora: '20:00',
    cantidadProductos: 8,
    costo: 90,
    tiempoEstimado: 25,
    estado: true,
  });
}

// Llamada a la función para agregar registros
agregarRegistros();

