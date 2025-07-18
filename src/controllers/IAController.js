import { enviarDatosIA } from '../services/IAServices.js';

export const analizarDatosPaciente = async (req, res) => {
  try {
    const datosPaciente = req.body;
    const resultadoIA = await enviarDatosIA(datosPaciente);
    res.status(200).json({ resultado: resultadoIA });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
