import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

type GetServersData = {
  skip: number;
  limit: number;
  orderBy: Prisma.ServerOrderByWithRelationInput[];
  filter: Prisma.ServerWhereInput;
};

export const getServers = async ({
  skip,
  limit,
  orderBy,
  filter,
}: GetServersData) => {
  return prisma.server.findMany({
    skip,
    take: limit,
    orderBy,
    where: filter,
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
      updatedAt: true,
    },
  });
};
