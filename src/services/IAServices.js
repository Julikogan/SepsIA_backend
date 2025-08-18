const analizarSignosVitales = async (pacienteId) => {
  // 1. Buscar signos vitales en la BD
  const signos = await prisma.SignosVitales.findFirst({
    where: { pacienteId },
    orderBy: { createdAt: "desc" } // el último registro
  });

  if (!signos) {
    throw new Error("No se encontraron signos vitales para este paciente");
  }

  // 2. Enviar a la IA
  const response = await axios.post("https://sepsia-visual.onrender.com/analizar", {
    frecuenciaCardiaca: signos.frecuencia_cardiaca,
    presion: signos.presion_arterial,
    temperatura: signos.temperatura_corporal,
    respiracion: signos.frecuencia_respiratoria,
    leucocitos: signos.leucocitos,
    lactato: signos.lactato,
    SaturacionOxigeno: signos.saturacion_oxigeno,
  });

  const resultadoIA = response.data; 

  // 3. Guardar en la BD
  const resultado = await prisma.resultadosIA.create({
    data: {
      pacienteId,
      resultado: resultadoIA.resultado,
    }
  });

  return resultado;
};

export default { analizarSignosVitales };
