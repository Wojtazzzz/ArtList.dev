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

  const response = await fetchServer(name);

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

async function fetchServer(name: string): Promise<Response> {
  if (process.env.APP_ENV !== "test") {
    return await fetch(`https://api.mcsrvstat.us/3/${name}`);
  }

  /* It's not possible to mock external api in server actions during e2e tests */
  return new Promise((resolve) => {
    resolve(
      new Response(
        JSON.stringify({
          ip: "172.65.239.124",
          port: 25015,
          motd: {
            clean: [
              "Art-Test.pl - Server Survival",
              "Lorem ipsum dolor sit amet",
            ],
          },
          players: {
            online: 186,
            max: 876,
            list: [],
          },
          version: "1.18 - 1.20",
          online: true,
          protocol: {
            version: 766,
            name: "1.20.6",
          },
          hostname: "",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAxlBMVEWG1WJsvUtSpTVsw0l5zFVftD9elDtRaypgsEJhrUReejRelzpQMSBHlS48hSdcczBmQSxpgjp0YFWZj4uAVTlpfTdbOSZ6ZFhjfjeAaFt+VDl/Xkp/Z1qEWTyJXUBoYjNzSzKLXj9uZDWXZ0Z+UzhlQCqicE2telRoQyxzTDNlQCuWZ0ZySjFsRi95UDZgPSmFWTxtRi+McmKLZ1CJXT95TzZ2TTSRY0RPMB+GWj2aakhnQix/VTl6UDaLaFGOYUKKXkB7UTZb4IV7AAAAAW9yTlQBz6J3mgAAAAFzUkdCAK7OHOkAAAMaSURBVHja7dzZUhNhFIXRoCIaRxyiIGLigIlxxAHn4f1fylf4qOrCJK59Te3/9OomV3+d0ahk61zJ+ZIL6cBUtT3cVK0qjQ4LFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggVrs7G2Si7ulGyXXLpckqpaxiVXUtUoke5cLUlV166XpKrt9NGk0cepCtbgWDdulqwmVhp9FxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYK1eVjpyuWt2yWpqiXNPk5Vd0ruprcD6zRYk5J7CStVtSSs+6lqSKz0L72XsFJVS8LaTVWwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQvWRmHtlzw4KElVDw9L0o7fR9OSWcnjtA959KTk6bOSVHX0vCRdrZ2njyZNtUgHwhocazbcWA0r/RpNh5tqPx0ICxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwVorrHRb9EXqSvcyF2n4xLBM7mmqCazBsV6WvEpdaXvv67PGSlO9aVhprGnqStk/a6zhRocFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBWAGtZ8jYt5k0HvluUHJe8/1CSlhh/TA84Sm9nmd50wpqkC7Fp8fXBcHt52911WKuM1ZKwjtNUsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFqz/FSv91SydmBgO09v5VHKSqj6XTNMDwlp/rC8lX1PVt5Lv64yVzmvb0gd8QFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBevfY81LfsxK9kp+pv3E6bxfJyVpEfDvo5JRWkg7T69nwPvYKX/SNd0Bv3dYp8FKXdOVxDrzX1JYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggUL1jph/QUpsdVYOfI3/AAAAABJRU5ErkJggg==",
          eula_blocked: false,
        }),
        {
          status: 200,
          headers: { "Content-type": "application/json" },
        },
      ),
    );
  });
}
