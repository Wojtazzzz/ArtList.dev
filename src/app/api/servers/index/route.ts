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
  });
  return Response.json(servers);
}
