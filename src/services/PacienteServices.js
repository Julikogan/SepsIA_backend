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