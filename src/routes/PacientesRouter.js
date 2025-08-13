import express from 'express'
import { registrarPaciente } from '../controllers/PacientesController.js'

const router = express.Router();

router.post('/', registrarPaciente)

export default router