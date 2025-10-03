import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const crearUsuario = async (data) => {
  return prisma.user.create({ data });
};

export const buscarUsuarioPorEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};
