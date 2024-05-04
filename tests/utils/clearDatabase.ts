import prisma from "@/prisma";

export const clearDatabase = async () => {
  await prisma.server.deleteMany();
};
