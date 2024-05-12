import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

type GetServersData = {
  skip: number;
  limit: number;
  orderBy: Prisma.ServerOrderByWithRelationInput[];
};

export const getServers = async ({ skip, limit, orderBy }: GetServersData) => {
  return prisma.server.findMany({
    skip: 0,
    take: 99999999,
    orderBy,
    select: {
      id: true,
      name: true,
      version: true,
      maxPlayers: true,
      currentPlayers: true,
      online: true,
      motdFirstLine: true,
      motdSecondLine: true,
      icon: true,
    },
  });
};
