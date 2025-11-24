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
export const actualizarPacienteService = async (id, data) => {
  console.log("ID recibido en el service:", id);
  console.log("DATA recibido en el service:", data);

  const existe = await prisma.pacientes.findUnique({
    where: { id }
  });

  if (!existe) {
    throw new Error("Paciente no encontrado");
  }

  return await prisma.pacientes.update({
    where: { id },
    data
  });
};

export const obtenerPacientesService = async () => {
  return await prisma.pacientes.findMany();
};
