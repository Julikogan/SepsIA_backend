import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const crearSignoVital = async (signoVitalData) => {
  return await prisma.signosVitales.create({ 
    data: {
      frecuencia_cardiaca: signoVitalData.frecuencia_cardiaca,
      presion_arterial: signoVitalData.presion_arterial,
      frecuencia_respiratoria: signoVitalData.frecuencia_respiratoria,
      temperatura_corporal: signoVitalData.temperatura_corporal,
      saturacion_oxigeno: signoVitalData.saturacion_oxigeno,
      procalcitonina: signoVitalData.procalcitonina,
      lactato: signoVitalData.lactato,
      proteina_creactiva: signoVitalData.proteina_creactiva,
      leucocitos: signoVitalData.leucocitos,
      patologias_presentes: signoVitalData.patologias_presentes,
      horario: new Date(),
      id_paciente: signoVitalData.id_paciente
    } 
  });
};