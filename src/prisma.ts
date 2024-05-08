import { PrismaClient } from "@prisma/client";

const getPrisma = () => {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
};

export const prisma = getPrisma();
