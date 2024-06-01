import { prisma } from "@/prisma";

export const markServerAsOffline = async (serverName: string) => {
  return prisma.server.update({
    where: {
      name: serverName,
    },
    data: {
      online: false,
      currentPlayers: 0,
    },
  });
};
