import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const obtenerResultadoPorSignoVital = async (id_signo_vital) => {
  return await prisma.resultado.findMany({
    where: {id_signo_vital}
  });
};