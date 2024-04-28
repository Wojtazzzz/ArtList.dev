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
import { API_URL } from "@/utils/env";
import { ServerTableRow } from "@/components/serverTableRow/ServerTableRow";

export default async function Home() {
  const response = await fetch(`${API_URL}/servers/index`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return <span>Fetch error</span>;
  }

  const servers = (await response.json()) as any[];

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
