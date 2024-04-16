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
  const response = await fetch("http://localhost:3000/api/servers/index");

  if (!response.ok) {
    return <span>Fetch error</span>;
  }

  const servers = await response.json();

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

const RESPONSE = {
  ip: "172.65.239.124",
  port: 25015,
  debug: {
    ping: true,
    query: false,
    srv: true,
    querymismatch: false,
    ipinsrv: false,
    cnameinsrv: true,
    animatedmotd: false,
    cachehit: false,
    cachetime: 1712598976,
    cacheexpire: 1712599036,
    apiversion: 3,
    dns: { srv: [Array], srv_a: [Array] },
    error: { query: "Failed to read from socket." },
  },
  motd: {
    raw: [
      "§r§f■§r§c■§r         §l§r§#FCD934B§r§#FCDC37L§r§#FCE03AO§r§#FCE33DK§r§#FCE640O§r§#FCEA44W§r§#FCED47O§r§#FCF04A.§r§#FCF44DP§r§#FCF750L§r §7- §r§fSurvival 1.20.4",
      "§r§e              §r§nɴᴏᴡᴀ ᴇᴅʏᴄᴊᴀ ᴡʏꜱᴛᴀʀᴛᴏᴡᴀʟᴀ§r",
    ],
    clean: [
      "■■         BLOKOWO.PL - Survival 1.20.4",
      "              ɴᴏᴡᴀ ᴇᴅʏᴄᴊᴀ ᴡʏꜱᴛᴀʀᴛᴏᴡᴀʟᴀ",
    ],
    html: [
      '<span style="color: #FFFFFF">■</span><span style="color: #FF5555">■</span>         <span style="color: #FCD934">B</span><span style="color: #FCDC37">L</span><span style="color: #FCE03A">O</span><span style="color: #FCE33D">K</span><span style="color: #FCE640">O</span><span style="color: #FCEA44">W</span><span style="color: #FCED47">O</span><span style="color: #FCF04A">.</span><span style="color: #FCF44D">P</span><span style="color: #FCF750">L</span> <span style="color: #AAAAAA">- </span><span style="color: #FFFFFF">Survival 1.20.4</span>',
      '<span style="color: #FFFF55">              </span><span style="text-decoration: underline;">ɴᴏᴡᴀ ᴇᴅʏᴄᴊᴀ ᴡʏꜱᴛᴀʀᴛᴏᴡᴀʟᴀ</span>',
    ],
  },
  players: {
    online: 86,
    max: 2000,
    list: [],
  },
  version: "1.18 - 1.20.4",
  online: true,
  protocol: { version: 765, name: "1.20.4" },
  hostname: "spectrum-01.papyrus.vip",
  icon: "data:image/png;base64,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",
  info: {
    raw: [
      "1.20.4 1.20.3 1.20.2 1.18.2 1.20.1 1.19.4 1.19.3 1.18.1 1.19.2  1.19.1 1.19",
      "1.20.4 1.20.3 1.20.2",
      "1.20.1 1.19.4 1.19.3 1.18.1",
      "1.19.2  1.19.1 1.19 ",
    ],
    clean: [
      "1.20.4 1.20.3 1.20.2 1.18.2 1.20.1 1.19.4 1.19.3 1.18.1 1.19.2  1.19.1 1.19",
      "1.20.4 1.20.3 1.20.2",
      "1.20.1 1.19.4 1.19.3 1.18.1",
      "1.19.2  1.19.1 1.19 ",
    ],
    html: [
      "1.20.4 1.20.3 1.20.2 1.18.2 1.20.1 1.19.4 1.19.3 1.18.1 1.19.2  1.19.1 1.19",
      "1.20.4 1.20.3 1.20.2",
      "1.20.1 1.19.4 1.19.3 1.18.1",
      "1.19.2  1.19.1 1.19 ",
    ],
  },
  eula_blocked: false,
} as const;
