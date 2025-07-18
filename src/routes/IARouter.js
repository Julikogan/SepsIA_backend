import express from 'express';
import { analizarDatosPaciente } from '../controllers/IAController.js';

const router = express.Router();

router.post('/analizar', analizarDatosPaciente);

export default router;
