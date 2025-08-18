import { Router } from "express";
import { analizarSignos } from "../controllers/IAController.js";

const router = Router();

// POST /ia/analizar/:pacienteId
router.post("/analizar/:pacienteId", analizarSignos);

export default router;