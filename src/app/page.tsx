import { Navigation } from "@/components/navigation/Navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/api/servers/index`, {
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
                <TableRow
                  key={server.ip}
                  className={cn("whitespace-nowrap", {
                    "bg-muted": index % 2 === 0,
                  })}
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <p>{server.name}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: server.motd }}
                    ></div>
                  </TableCell>
                  <TableCell>
                    {server.currentPlayers} / {server.maxPlayers}
                  </TableCell>
                  <TableCell className="text-right">{server.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </main>
    </>
  );
}
