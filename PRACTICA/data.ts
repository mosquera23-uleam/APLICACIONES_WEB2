import { ICocinero, IReceta, IPreparacion } from './interfaces';

// Creamos arreglos de objetos con la información de los cocineros, recetas y preparaciones
export const Icocineros: ICocinero[] = [
  { ID: 1, Nombre: "Juan", SueldoBasico: 1500 },
  { ID: 2, Nombre: "Maria", SueldoBasico: 1600 },
  { ID: 3, Nombre: "Pedro", SueldoBasico: 1550 }
];

export const Irecetas: IReceta[] = [
  { ID: 1, NombrePlato: "Pasta Carbonara", Ingredientes: ["Pasta", "Bacon", "Huevos", "Queso"], Cantidades: [200, 100, 2, 50] },
  { ID: 2, NombrePlato: "Sushi", Ingredientes: ["Arroz", "Pescado", "Alga Nori", "Vinagre de arroz"], Cantidades: [300, 150, 5, 50] },
  { ID: 3, NombrePlato: "Ensalada César", Ingredientes: ["Lechuga", "Pollo", "Pan", "Queso Parmesano"], Cantidades: [100, 200, 2, 30] }
];

export const Ipreparaciones: IPreparacion[] = [
  { ID: 1, IDMesero: 101, IDReceta: 1, Fecha: "2024-04-30", Hora: "18:00", CantidadProductos: 10, Costo: 50, TiempoEstimado: 30 },
  { ID: 2, IDMesero: 102, IDReceta: 2, Fecha: "2024-05-01", Hora: "12:00", CantidadProductos: 20, Costo: 100, TiempoEstimado: 45 },
  { ID: 3, IDMesero: 103, IDReceta: 3, Fecha: "2024-05-02", Hora: "19:00", CantidadProductos: 15, Costo: 70, TiempoEstimado: 25 }
];
