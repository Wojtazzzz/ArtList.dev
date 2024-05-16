import { getServers } from "@/infrastructure/database/getServers";
import { getServersCount } from "@/infrastructure/database/getServersCount";
import { computePaginationProperties } from "@/utils/computePaginationProperties";

type FilterServers =
  | {
      name: string | undefined;
    }
  | undefined;

export const getPaginatedServers = async (
  page: number,
  limit: number,
  filter: FilterServers,
) => {
  const filterProp = {
    name: {
      contains: filter?.name ? filter.name : "",
      mode: "insensitive",
    },
  } as const;

  const serversCount = await getServersCount(filterProp);

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
    filter: filterProp,
  });

  return {
    page: currentPage,
    nextPage,
    prevPage,
    lastPage,
    servers,
  };
};
