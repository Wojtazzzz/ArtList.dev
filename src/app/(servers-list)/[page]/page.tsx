import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { ServersTable } from "@/components/modules/servers/ServersTable";
import { getPageParam } from "@/utils/getPageParam";
import { prisma } from "@/prisma";
import { StaticPagination } from "@/components/modules/servers/paginations/StaticPagination";
import { getPaginatedServers } from "@/services/getPaginatedServers";

export const revalidate = 1200;

export async function generateStaticParams() {
  const serversCount = await prisma.server.count();

  return Array.from({
    length: Math.ceil(serversCount / SERVERS_LIMIT_PER_PAGE),
  }).map((_, index) => ({
    page: String(index + 1),
  }));
}

type ServersPaginatedPageParams = {
  params: {
    page: string;
  };
};

export default async function ServersPaginatedPage({
  params,
}: ServersPaginatedPageParams) {
  const response = await getPaginatedServers(
    getPageParam(params.page),
    SERVERS_LIMIT_PER_PAGE,
  );

  return (
    <>
      <ServersTable servers={response.servers} page={response.page} />

      <div className="mt-6">
        <StaticPagination
          lastPage={response.lastPage}
          page={response.page}
          nextPage={response.nextPage}
          prevPage={response.prevPage}
        />
      </div>
    </>
  );
}
