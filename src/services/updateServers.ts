import { getAllServers } from "@/dal/database/getAllServers";
import { fetchExternalServerData } from "@/dal/fetchExternalServerData";
import { markServerAsOffline } from "@/dal/database/markServerAsOffline";
import { updateServer } from "@/dal/database/updateServer";

export const updateServers = async () => {
  const servers = await getAllServers();

  for (const server of servers) {
    const response = await fetchExternalServerData(server.name);

    if (!response.success) {
      continue;
    }

    const serverData = response.data;

    if (!serverData.online) {
      await markServerAsOffline(server.name);
      continue;
    }

    await updateServer(server.name, {
      ip: serverData.ip,
      currentPlayers: serverData.players.online,
      maxPlayers: serverData.players.max,
      motdFirstLine:
        serverData.motd.clean.length > 0 ? serverData.motd.clean[0] : null,
      motdSecondLine:
        serverData.motd.clean.length > 1 ? serverData.motd.clean[1] : null,
      online: true,
      version: serverData.version,
      icon: serverData.icon,
    });
  }
};
