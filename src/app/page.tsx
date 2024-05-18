import { Container } from "@/components/ui/Container";
import { z } from "zod";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { getPageParam } from "@/utils/getPageParam";
import { ServersTable } from "@/components/modules/servers/ServersTable";
import { ServersPagination } from "@/components/modules/servers/ServersPagination";
import { getPaginatedServers } from "@/services/getPaginatedServers";

const serversSchema = z.object({
  page: z.number(),
  prevPage: z.number().nullable(),
  nextPage: z.number().nullable(),
  lastPage: z.number(),
  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      version: z.string().nullable(),
      motdFirstLine: z.string().nullable(),
      motdSecondLine: z.string().nullable(),
      currentPlayers: z.number(),
      maxPlayers: z.number(),
      online: z.boolean(),
      icon: z.string().nullable(),
    }),
  ),
});

export type Server = z.infer<typeof serversSchema>["data"][0];

type HomePageParams = {
  searchParams: {
    page?: string;
    name?: string;
  };
};

export default async function HomePage({ searchParams }: HomePageParams) {
  const response = await getPaginatedServers(
    getPageParam(searchParams.page),
    SERVERS_LIMIT_PER_PAGE,
    {
      name: searchParams.name ?? "",
    },
  );

  return (
    <main>
      <Container>
        <ServersTable servers={response.servers} />

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
