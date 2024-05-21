import express from 'express';
import { PrismaClient } from '@prisma/client';
import { cocineroRoutes } from './routes/cocineroRoutes';
import { recetaRoutes } from './routes/recetaRoutes';
import { preparacionRoutes } from './routes/preparacionRoutes';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear una instancia de la aplicación Express
const app = express();

// Middleware para analizar las solicitudes JSON
app.use(express.json());

// Usar las rutas definidas en otros archivos
app.use('/cocinero', cocineroRoutes);
app.use('/preparacion', preparacionRoutes);
app.use('/receta', recetaRoutes);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




