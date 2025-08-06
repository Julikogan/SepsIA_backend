import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

import signosRoutes from './routes/SignosRouter.js';
import resultadosRoutes from './routes/ResultadosRouter.js';
import iaRouter from './routes/IARouter.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definir rutas
app.use('/signos-vitales', signosRoutes);
app.use('/resultados', resultadosRoutes);
app.use('/ia', iaRouter);

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Se supone que funca" });
});

// Start server
export const handler = serverless(app);
