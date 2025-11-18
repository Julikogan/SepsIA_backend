import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const crearPaciente = async (pacienteData) => {
  return await prisma.pacientes.create({ 
    data: {
      nombre: pacienteData.nombre,
      sexo: pacienteData.sexo,
      edad: pacienteData.edad,
      dni: pacienteData.dni,
      habitacion: pacienteData.habitacion,
      ingreso_paciente: new Date()
    } 
  });
};

export const actualizarPacienteService = async (id) => {
  return await prisma.pacientes.update({
    where: { id},
    data: {
      ingreso_paciente: new Date(),
    }
  });
};

export const obtenerPacientesService = async () => {
  return await prisma.pacientes.findMany(); // Obtiene todos los registros de la tabla 'pacientes'
};
