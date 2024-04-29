import prisma from "@/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const servers = await prisma.server.findMany({
    orderBy: [
      {
        online: "desc",
      },
      {
        currentPlayers: "desc",
      },
      {
        maxPlayers: "desc",
      },
    ],
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

  return Response.json(servers);
}
