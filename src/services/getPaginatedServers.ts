import { getServers } from "@/infrastructure/database/getServers";
import { getServersCount } from "@/infrastructure/database/getServersCount";
import { computePaginationProperties } from "@/utils/computePaginationProperties";

export const getPaginatedServers = async (page: number, limit: number) => {
  const serversCount = await getServersCount();

  const { currentPage, nextPage, prevPage, lastPage, skip } =
    await computePaginationProperties(page, limit, serversCount);

  const servers = await getServers({
    skip,
    limit,
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

  return {
    page: currentPage,
    nextPage,
    prevPage,
    lastPage,
    servers,
  };
};
