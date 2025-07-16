import express from 'express';
import cors from 'cors';
import signosRoutes from './src/routes/SignosRouter.js';
import resultadosRoutes from './src/routes/ResultadosRouter.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Deffinir rutas
app.use('/signos-vitales', signosRoutes);
app.use('/resultados', resultadosRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Se supone que funca" });
});

const startServer = async () => {
    await main();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

export default app;

