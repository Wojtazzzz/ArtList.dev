import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { Container } from "@/components/ui/Container";
import { ServerTableRow } from "@/components/serverTableRow/ServerTableRow";
import { serverFetch } from "@/utils/serverFetch";
import { z } from "zod";
import { parseData } from "@/utils/parseData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista serwerów Minecraft - ArtList.pl",
  description:
    "Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub zareklamuj własny.",
};

const serversSchema = z.array(
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
);

export type Server = z.infer<typeof serversSchema>[0];

export default async function Home() {
  const servers = parseData(await serverFetch("/servers/index"), serversSchema);

  return (
    <main>
      <Container>
        <Table>
          <TableCaption>Lista serwerów Minecraft.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]">#</TableHead>
              <TableHead>Nazwa</TableHead>
              <TableHead>Graczy</TableHead>
              <TableHead className="text-right">Wersja</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servers.map((server, index) => (
              <ServerTableRow server={server} index={index} key={server.id} />
            ))}
          </TableBody>
        </Table>
      </Container>
    </main>
  );
}
