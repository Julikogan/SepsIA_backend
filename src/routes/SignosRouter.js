import express from 'express'
import { registrarSignosVitales } from '../controllers/SignosController.js'

const router = express.Router();

router.post('/', registrarSignosVitales)

export default router