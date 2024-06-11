// src/server.ts
import express from 'express';
import env from './config';
import cocineroRoutes from './routes/cocinero';
import recetaRoutes from './routes/receta';
import preparacionRoutes from './routes/preparacion';
import githubRoutes from './routes/github';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/cocineros', cocineroRoutes);
app.use('/recetas', recetaRoutes);
app.use('/preparaciones', preparacionRoutes);
app.use('/github', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
