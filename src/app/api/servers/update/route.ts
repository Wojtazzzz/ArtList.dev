import prisma from "@/prisma";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const servers = await prisma.server.findMany({
    select: {
      name: true,
      ip: true,
    },
  });

  for (const server of servers) {
    const res = await fetch(`https://api.mcsrvstat.us/3/${server.ip}`);

    if (!res.ok) {
      continue;
    }

    const data = await res.json();

    if (!data.online) {
      await prisma.server.update({
        where: {
          name: server.name,
        },
        data: {
          online: false,
        },
      });

      continue;
    }

    await prisma.server.update({
      where: {
        name: server.name,
      },
      data: {
        ip: data.ip,
        currentPlayers: data.players.online,
        maxPlayers: data.players.max,
        motd:
          "<div>" +
          data.motd.html[0] +
          "</div>" +
          "<div>" +
          data.motd.html[1] +
          "</div>",
        online: true,
        version: data.version,
      },
    });
  }

  return Response.json({ status: "ok" });
}
