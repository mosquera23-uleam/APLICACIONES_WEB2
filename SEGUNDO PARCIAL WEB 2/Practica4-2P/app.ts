import express from 'express';
import { PrismaClient } from '@prisma/client';
import { cocineroRoutes } from './routes/cocineroRoutes';
import { recetaRoutes } from './routes/recetaRoutes';
import { preparacionRoutes } from './routes/preparacionRoutes';
import { HttpServiceUnified } from './httpService';

// Crear una instancia de HttpServiceUnified
const httpService = new HttpServiceUnified();

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

// Ruta para interactuar con API B
app.get('/api-b/pacientes', async (req, res) => {
    try {
        // Usa el servicio HTTP elegido
        const response = await httpService.get('http://localhost:3001/paciente');
        if (response) {
            res.json(response.data || response); // Ajustar según el cliente
        } else {
            res.status(500).json({ error: 'Unable to fetch data from API B' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch data from API B' });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('API A (Cocinero) is running on http://localhost:3000');
});
