import { Navigation } from "@/components/navigation/Navigation";
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

const serversSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    version: z.string(),
    motdFirstLine: z.string().nullable(),
    motdSecondLine: z.string().nullable(),
    currentPlayers: z.number(),
    maxPlayers: z.number(),
  }),
);

export default async function Home() {
  const servers = parseData(await serverFetch("/servers/index"), serversSchema);

  return (
    <>
      <Navigation />

      <main>
        <Container>
          <Table>
            <TableCaption>Lista serwerów Minecraft.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
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
    </>
  );
}
