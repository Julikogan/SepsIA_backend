import { PrismaClient } from '@prisma/client';;
const prisma = new PrismaClient();

export const obtenerResultadoPorSignoVital = async (signoVitalId) => {
  return await prisma.resultado.findMany({
    where: { signoVitalId }
  });
};