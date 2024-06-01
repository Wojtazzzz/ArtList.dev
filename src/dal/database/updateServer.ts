import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";

type UpdateServerData = Pick<
  Prisma.ServerUpdateInput,
  | "ip"
  | "currentPlayers"
  | "maxPlayers"
  | "motdFirstLine"
  | "motdSecondLine"
  | "online"
  | "version"
  | "icon"
>;

export const updateServer = async (
  serverName: string,
  data: UpdateServerData,
) => {
  return prisma.server.update({
    where: {
      name: serverName,
    },
    data,
  });
};
