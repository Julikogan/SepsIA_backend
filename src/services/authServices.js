import { prisma } from "../prismaClient.js";

export const crearUsuario = async (data) => {
  return prisma.usuario.create({ data });
};

export const buscarUsuarioPorEmail = async (email) => {
  return prisma.usuario.findUnique({ where: { email } });
};
