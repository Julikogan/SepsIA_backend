import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const crearSignoVital = async (presion) => {
  return await prisma.signosVitales.create({ 
    data: {
      horario: new Date(),
      presion: presion,
    } 
  })
}