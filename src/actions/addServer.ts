"use server";

import prisma from "@/prisma";
import { z } from "zod";
import { revalidateTag } from "next/cache";

const schema = z.object({
  name: z.string(),
});

export type AddServerPayload = z.input<typeof schema>;

export const addServer = async ({ name }: AddServerPayload) => {
  if (!name) {
    return {
      error: "Podano nieprawidłową nazwę serwera",
    };
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
    return {
      error: "Podany serwer już istnieje",
    };
  }

  const response = await fetch(`https://api.mcsrvstat.us/3/${name}`);

  if (!response.ok) {
    return {
      error: "Wczytywanie danych nie powiodło się",
    };
  }

  const data = await response.json();

  if (!data.online) {
    return {
      error: "Serwer nie istnieje lub jest offline",
    };
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
      icon: data.icon,
    },
  });

  revalidateTag("servers");

  return {};
};
