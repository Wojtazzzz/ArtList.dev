import { prisma } from "@/prisma";

export const getServersCount = async () => {
  return prisma.server.count();
};
