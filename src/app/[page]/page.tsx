import { Container } from "@/components/ui/Container";
import { serverFetch } from "@/utils/serverFetch";
import { z } from "zod";
import { parseData } from "@/utils/parseData";
import { prisma } from "@/prisma";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { getPageParam } from "@/utils/getPageParam";
import { DemoServersTable } from "@/components/modules/servers/DemoServersTable";

const serversSchema = z.object({
  page: z.number(),
  prevPage: z.number().nullable(),
  nextPage: z.number().nullable(),
  lastPage: z.number(),
  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      version: z.string(),
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

export async function generateStaticParams() {
  const pagesCount = Math.ceil(
    (await prisma.server.count()) / SERVERS_LIMIT_PER_PAGE,
  );

  return Array.from({ length: pagesCount }).map((value, index) => ({
    page: String(index + 1),
  }));
}

type HomePageParams = {
  params: {
    page?: string;
  };
};

export default async function HomePage({ params }: HomePageParams) {
  const pageParam = getPageParam(params.page);

  const response = parseData(
    await serverFetch(
      `/servers/index?page=${Math.max(0, pageParam)}&limit=${SERVERS_LIMIT_PER_PAGE}`,
      60000,
      ["servers"],
    ),
    serversSchema,
  );

  return (
    <main>
      <Container>
        <DemoServersTable servers={response.data} />
      </Container>
    </main>
  );
}
