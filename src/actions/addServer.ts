"use server";

import prisma from "@/prisma";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

export const addServer = async ({ name }: z.input<typeof schema>) => {
  if (!name) {
    throw new Error("Podano nieprawidłową nazwę serwera");
  }

  const server = await prisma.server.findFirst({
    where: {
      OR: [
        {
          name: {
            equals: name,
            mode: "insensitive",
          },
        },
        {
          ip: name,
        },
      ],
    },
  });

  if (server) {
    throw new Error("Podany serwer już istnieje");
  }

  const response = await fetch(`https://api.mcsrvstat.us/3/${name}`);

  if (!response.ok) {
    throw new Error("Wczytywanie danych nie powiodło się");
  }

  const data = await response.json();

  if (!data.online) {
    throw new Error("Serwer nie istnieje lub jest offline");
  }

  await prisma.server.create({
    data: {
      name,
      ip: data.ip,
      currentPlayers: data.players.online,
      maxPlayers: data.players.max,
      motdFirstLine: data.motd.clean.length > 0 ? data.motd.clean[0] : null,
      motdSecondLine: data.motd.clean.length > 1 ? data.motd.clean[1] : null,
      online: true,
      version: data.version,
    },
  });
};
