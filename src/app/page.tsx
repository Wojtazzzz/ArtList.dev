import { Navigation } from "@/components/navigation/Navigation";
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
import { cn } from "@/lib/utils";
import { API_URL } from "@/utils/env";

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
                <TableRow
                  key={server.ip}
                  className={cn("whitespace-nowrap", {
                    "bg-muted": index % 2 === 0,
                  })}
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <p className="mb-1 text-base font-medium">{server.name}</p>
                    <div>
                      {server.motdFirstLine && (
                        <div>{server.motdFirstLine}</div>
                      )}
                      {server.motdSecondLine && (
                        <div>{server.motdSecondLine}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {server.currentPlayers} / {server.maxPlayers}
                  </TableCell>
                  <TableCell className="text-right">
                    <p
                      className="ml-auto w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
                      title={server.version}
                    >
                      {/*Czy to zgodne z a11y*/}
                      {server.version}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </main>
    </>
  );
}
