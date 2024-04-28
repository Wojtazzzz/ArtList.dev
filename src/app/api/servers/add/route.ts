import prisma from "@/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const json = await request.json();
  const { name } = json;

  if (!name) {
    return Response.json({
      status: "bad request",
    });
  }

  const server = await prisma.server.findFirst({
    where: {
      OR: [
        {
          name,
        },
        {
          ip: name,
        },
      ],
    },
  });

  if (server) {
    return Response.json({
      status: "already exists",
    });
  }

  const response = await fetch(`https://api.mcsrvstat.us/3/${name}`);

  if (!response.ok) {
    return Response.json({
      status: "fetch error",
    });
  }

  const data = await response.json();

  if (!data.online) {
    return Response.json({
      status: "server offline",
    });
  }

  await prisma.server.create({
    data: {
      name,
      ip: data.ip,
      currentPlayers: data.players.online,
      maxPlayers: data.players.max,
      motdFirstLine: data.motd.html.length > 0 ? data.motd.html[0] : null,
      motdSecondLine: data.motd.html.length > 1 ? data.motd.html[1] : null,
      online: true,
      version: data.version,
    },
  });

  return Response.json({
    status: "ok",
  });
}
