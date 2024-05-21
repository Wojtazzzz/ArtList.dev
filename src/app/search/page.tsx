import { Container } from "@/components/ui/Container";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { ServersTable } from "@/components/modules/servers/ServersTable";
import { ServersPagination } from "@/components/modules/servers/ServersPagination";
import { getPaginatedServers } from "@/services/getPaginatedServers";
import { getPageParam } from "@/utils/getPageParam";

type SearchPageParams = {
  searchParams: {
    page?: string;
    name?: string;
    sort?: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageParams) {
  const response = await getPaginatedServers(
    getPageParam(searchParams.page),
    SERVERS_LIMIT_PER_PAGE,
    undefined,
    searchParams.sort,
  );

  return (
    <main>
      <Container>
        <ServersTable servers={response.servers} page={response.page} />

        <div className="mt-6">
          <ServersPagination
            lastPage={response.lastPage}
            page={response.page}
            nextPage={response.nextPage}
            prevPage={response.prevPage}
          />
        </div>
      </Container>
    </main>
  );
}
