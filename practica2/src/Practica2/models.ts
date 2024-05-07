import mongoose, { Schema, Document } from 'mongoose';
import { ConnectOptions } from 'mongoose';

mongoose.connect('mongodb+srv://jean2001:12345@atlascluster.8wzaa3y.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));


// Definición de los modelos

// Modelo para el cocinero
interface ICocinero extends Document {
  nombre: string;
  sueldoBasico: number;
}

const CocineroSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  sueldoBasico: { type: Number, required: true },
});

export const Cocinero = mongoose.model<ICocinero>('Cocinero', CocineroSchema);

// Modelo para la receta
interface IReceta extends Document {
  nombrePlato: string;
  ingredientes: string[];
  cantidades: number[];
}

const RecetaSchema: Schema = new Schema({
  nombrePlato: { type: String, required: true },
  ingredientes: [{ type: String, required: true }],
  cantidades: [{ type: Number, required: true }],
});

export const Receta = mongoose.model<IReceta>('Receta', RecetaSchema);

// Modelo para la preparación
interface IPreparacion extends Document {
  idMesero: string;
  idReceta: string;
  fecha: Date;
  hora: string;
  cantidadProductos: number;
  costo: number;
  tiempoEstimado: number;
  estado: boolean;
}

const PreparacionSchema: Schema = new Schema({
  idMesero: { type: String, required: true },
  idReceta: { type: String, required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  cantidadProductos: { type: Number, required: true },
  costo: { type: Number, required: true },
  tiempoEstimado: { type: Number, required: true },
  estado: { type: Boolean, default: true }, // Por defecto está activo
});

export const Preparacion = mongoose.model<IPreparacion>('Preparacion', PreparacionSchema);
