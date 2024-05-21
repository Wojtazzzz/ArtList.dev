import { API_URL, SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { ServersTable } from "@/components/modules/servers/ServersTable";
import { getPageParam } from "@/utils/getPageParam";
import { prisma } from "@/prisma";
import { StaticPagination } from "@/components/modules/servers/paginations/StaticPagination";

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

const fetchServers = async (page: number) => {
  const response = await fetch(`${API_URL}/servers?page=${page}`);

  if (!response.ok) {
    return null;
    // throw new Error("Fetch failed");
  }

  return await response.json();
};

export default async function ServersPaginatedPage({
  params,
}: ServersPaginatedPageParams) {
  const response = await fetchServers(getPageParam(params.page));

  if (!response) {
    return <span>Build...</span>;
  }
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
