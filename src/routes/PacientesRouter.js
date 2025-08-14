import express from 'express'
import { registrarPaciente, actualizarPaciente } from '../controllers/PacientesController.js'

const router = express.Router();

router.post('/crear', registrarPaciente)
router.put('/actualizar/:id', actualizarPaciente)

export default router