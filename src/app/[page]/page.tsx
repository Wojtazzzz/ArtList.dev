import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { Container } from "@/components/ui/Container";
import { serverFetch } from "@/utils/serverFetch";
import { z } from "zod";
import { parseData } from "@/utils/parseData";
import prisma from "@/prisma";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui-library/pagination";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { capitalize } from "@/utils/capitalize";

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
    await serverFetch(`/servers/index?page=${Math.max(0, pageParam)}`),
    serversSchema,
  );

  return (
    <main>
      <Container>
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
              <TableRow
                key={server.id}
                className={cn("whitespace-nowrap", {
                  "bg-muted": (index + 1) % 2 === 0,
                })}
              >
                <TableCell className="font-medium">
                  {((pageParam === 0 ? 1 : pageParam) - 1) * 2 + index + 1}
                </TableCell>
                <TableCell className="py-2">
                  {/*<button*/}
                  {/*  onClick={() => copyIp(server.name)}*/}
                  {/*  className="flex w-full py-2 text-left"*/}
                  {/*>*/}
                  <div className="my-auto mr-3.5 h-full w-[58px]">
                    {server.icon && (
                      <Image
                        src={server.icon}
                        alt="Logo serwera"
                        width="58"
                        height="58"
                      />
                    )}
                  </div>

                  <div>
                    <p className="mb-1 text-base font-medium">
                      {capitalize(server.name)}
                    </p>
                    <div>
                      {server.motdFirstLine && <p>{server.motdFirstLine}</p>}
                      {server.motdSecondLine && <p>{server.motdSecondLine}</p>}
                    </div>
                  </div>
                  {/*</button>*/}
                </TableCell>
                <TableCell>
                  <span className={cn({ "text-red-600": !server.online })}>
                    {server.currentPlayers} / {server.maxPlayers}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <p
                    className="ml-auto w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
                    title={server.version}
                  >
                    {server.version}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              {response.prevPage && (
                <PaginationItem>
                  <PaginationPrevious href={`/${response.prevPage}`} />
                </PaginationItem>
              )}

              {response.page - 2 > 0 && (
                <PaginationItem>
                  <PaginationLink href={`/${response.page - 2}`}>
                    {response.page - 2}
                  </PaginationLink>
                </PaginationItem>
              )}

              {response.prevPage && (
                <PaginationItem>
                  <PaginationLink href={`/${response.prevPage}`}>
                    {response.prevPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationLink href={`/${response.page}`}>
                  {response.page}
                </PaginationLink>
              </PaginationItem>

              {response.nextPage && (
                <PaginationItem>
                  <PaginationLink href={`/${response.nextPage}`}>
                    {response.nextPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              {response.lastPage >= response.page + 2 && (
                <PaginationItem>
                  <PaginationLink href={`/${response.page + 2}`}>
                    {response.page + 2}
                  </PaginationLink>
                </PaginationItem>
              )}

              {response.lastPage >= response.page + 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {response.nextPage && (
                <PaginationItem>
                  <PaginationNext href={`/${response.nextPage}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </Container>
    </main>
  );
}
