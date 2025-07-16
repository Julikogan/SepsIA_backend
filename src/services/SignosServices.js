import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const crearSignoVital = async (presion) => {
  return await prisma.signosVitales.create({ 
    data: {
      horario: new Date(),
      presion: presion,
    } 
  })
}