import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

type CreateServerInput = Prisma.ServerCreateInput;

export const createServer = async (data: CreateServerInput) => {
  return prisma.server.create({
    data,
  });
};
