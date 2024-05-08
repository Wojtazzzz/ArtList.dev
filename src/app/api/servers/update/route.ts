import { prisma } from "@/prisma";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return Response.json({
      status: "unauthorized",
    });
  }

  const servers = await prisma.server.findMany({
    select: {
      name: true,
      ip: true,
    },
  });

  for (const server of servers) {
    const res = await fetch(`https://api.mcsrvstat.us/3/${server.name}`);

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
          currentPlayers: 0,
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
        motdFirstLine: data.motd.clean.length > 0 ? data.motd.clean[0] : null,
        motdSecondLine: data.motd.clean.length > 1 ? data.motd.clean[1] : null,
        online: true,
        version: data.version,
        icon: data.icon,
      },
    });
  }

  return Response.json({
    status: "ok",
  });
}
