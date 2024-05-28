import express from 'express';
import bodyParser from 'body-parser';
import { cocineroRoutes } from './cocineroRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Usar las rutas definidas en cocineroRoutes.ts
app.use('/api/cocineros', cocineroRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
