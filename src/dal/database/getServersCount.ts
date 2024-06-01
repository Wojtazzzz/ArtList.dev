import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

export const getServersCount = async (filter: Prisma.ServerWhereInput) => {
  return prisma.server.count({
    where: filter,
  });
};
