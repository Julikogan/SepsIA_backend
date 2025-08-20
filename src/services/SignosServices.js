import { PrismaClient } from '../generated/prisma/client.js';
import axios from 'axios';

const prisma = new PrismaClient();

export const crearSignoVital = async (signoVitalData) => {
  if (!signoVitalData.pacienteDni) {
    throw new Error("Debe enviarse el DNI del paciente");
  }

  const pacienteDni = parseInt(signoVitalData.pacienteDni.toString().trim(), 10);
  if (isNaN(pacienteDni) || pacienteDni <= 0) {
    throw new Error("El DNI del paciente no es válido");
  }

  const paciente = await prisma.pacientes.findUnique({
    where: { dni: pacienteDni }
  });

  if (!paciente) {
    throw new Error(`No se encontró paciente con DNI ${pacienteDni}`);
  }

  // Crear signo vital
  const nuevoRegistro = await prisma.signosVitales.create({
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
      pacienteId: paciente.id
    }
  });

  // Llamar al modelo de IA
  (async () => {
    try {
      const response = await axios.post('https://sepsia-visual.onrender.com/analizar', {
        frecuencia_cardiaca: signoVitalData.frecuencia_cardiaca,
        presion_arterial: signoVitalData.presion_arterial,
        frecuencia_respiratoria: signoVitalData.frecuencia_respiratoria,
        temperatura_corporal: signoVitalData.temperatura_corporal,
        saturacion_oxigeno: signoVitalData.saturacion_oxigeno,
        procalcitonina: signoVitalData.procalcitonina,
        lactato: signoVitalData.lactato,
        proteina_creactiva: signoVitalData.proteina_creactiva,
        leucocitos: signoVitalData.leucocitos,
        patologias_presentes: signoVitalData.patologias_presentes
      });

      // Extraer el valor float del resultado
      const valorIA = parseFloat(response.data.resultado);

      if (isNaN(valorIA)) {
        console.error('Valor de IA no es un número válido:', response.data);
        return;
      }

      // Guardar en la tabla Resultado
    const resultadoGuardado = await prisma.resultado.create({
    data: {
    resultado: valorIA,
    signoVitalId: nuevoRegistro.id
    }
   });

  console.log('Resultado guardado en DB:', resultadoGuardado);


    } catch (err) {
      if (err.response) {
        console.error('Error de la IA:', err.response.status, err.response.data);
      } else if (err.request) {
        console.error('No hubo respuesta de la IA:', err.request);
      } else {
        console.error('Error interno de Axios:', err.message);
      }
    }
  })();

  return nuevoRegistro;
};
