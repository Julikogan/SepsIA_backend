import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient(); //

export const crearSignoVital = async (signoVitalData) => {
  if (!signoVitalData.pacienteDni) {
    throw new Error("Debe enviarse el DNI del paciente");
  }

  // Convertir DNI a número
  const pacienteDni = parseInt(signoVitalData.pacienteDni.toString().trim(), 10);

  if (isNaN(pacienteDni) || pacienteDni <= 0) {
    throw new Error("El DNI del paciente no es válido");
  }

  // Buscar paciente por DNI
  const paciente = await prisma.pacientes.findUnique({
    where: { dni: pacienteDni }
  });

  if (!paciente) {
    throw new Error(`No se encontró paciente con DNI ${pacienteDni}`);
  }

  // Crear signo vital usando pacienteId
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
      paciente: {
        connect: { id: paciente.id }
      }
    }
  });
};
