import { obtenerResultadoPorSignoVital } from '../services/ResultadosServices.js';

export const getResultadoPorSignoVital = async (req, res) => {
  try {
    const resultado = await obtenerResultadoPorSignoVital(Number(req.params.id));
    console.log("Resultado encontrado:", resultado);

    if (!resultado) {
      return res.status(404).json({ message: 'Resultado no encontrado para este signo vital' });
    }

    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener resultado:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};