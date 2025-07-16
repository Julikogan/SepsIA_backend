import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const obtenerResultadoPorSignoVital = async (signoVitalId) => {
  return await prisma.resultado.findMany({
    where: { signoVitalId }
  });
};