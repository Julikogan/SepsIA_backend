import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const crearSignoVital = async (presion) => {
  return await prisma.signosVitales.create({ 
    data: {
      horario: new Date(),
      presion: presion,
    } 
  })
}

export const guardarResultadoIA = async (datos) => {
  return await prisma.resultado.create({ data: datos })
}