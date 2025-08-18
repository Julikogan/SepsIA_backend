import iaService from "../services/IAServices.js";

export const analizarSignos = async (req, res) => {
  try {
    const { pacienteId } = req.params;

    const resultado = await iaService.analizarSignosVitales(pacienteId);

    res.json({
      message: "Resultado almacenado correctamente",
      data: resultado
    });
  } catch (error) {
    console.error("Error en analizarSignos:", error);
    res.status(500).json({ error: "Error al analizar signos vitales" });
  }
};
