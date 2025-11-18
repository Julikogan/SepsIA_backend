import express from 'express'
import { registrarPaciente, actualizarPaciente, obtenerPacientes } from '../controllers/PacientesController.js'

const router = express.Router();

router.post('/crear', registrarPaciente)
router.put('/actualizar/:id', actualizarPaciente)
router.get('/', obtenerPacientes)

export default router