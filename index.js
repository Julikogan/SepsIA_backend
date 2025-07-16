import express from 'express';
import cors from 'cors';
import signosRoutes from './src/routes/SignosRouter.js';
import resultadosRoutes from './src/routes/ResultadosRouter.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
  };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definir rutas
app.use('/signos-vitales', signosRoutes);
app.use('/resultados', resultadosRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Se supone que funca" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;

