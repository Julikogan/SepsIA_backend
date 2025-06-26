import express from 'express';
import { getResultadoPorSignoVital } from '../controllers/ResultadosController.js';

const router = express.Router();

router.get('/resultados/:id', getResultadoPorSignoVital);

export default router;
