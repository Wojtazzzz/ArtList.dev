import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { Container } from "@/components/ui/Container";
import { ServerTableRow } from "@/components/modules/servers/serverTableRow/ServerTableRow";
import { serverFetch } from "@/utils/serverFetch";
import { z } from "zod";
import { parseData } from "@/utils/parseData";
import { prisma } from "@/prisma";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { ServersPagination } from "@/components/modules/servers/ServersPagination";

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
    page?: number;
  };
};

export default async function HomePage({ params }: HomePageParams) {
  const pageParam = isNaN(Number(params.page)) ? 0 : Number(params.page);

  const response = parseData(
    await serverFetch(`/servers/index?page=${Math.max(0, pageParam)}`, 60000, [
      "servers",
    ]),
    serversSchema,
  );

  return (
    <main>
      <Container>
        <p className="mb-6 mt-3 text-sm">
          Kliknij w nazwę serwera, aby skopiować jego adres.
        </p>
        <Table>
          <TableCaption>Lista serwerów Minecraft.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">#</TableHead>
              <TableHead>Nazwa</TableHead>
              <TableHead>Graczy</TableHead>
              <TableHead className="text-right">Wersja</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.data.map((server, index) => (
              <ServerTableRow
                server={server}
                index={((pageParam === 0 ? 1 : pageParam) - 1) * 2 + index + 1}
                key={server.id}
              />
            ))}
          </TableBody>
        </Table>

        <div className="mt-6">
          <ServersPagination
            page={response.page}
            prevPage={response.prevPage}
            nextPage={response.nextPage}
            lastPage={response.lastPage}
          />
        </div>
      </Container>
    </main>
  );
}
