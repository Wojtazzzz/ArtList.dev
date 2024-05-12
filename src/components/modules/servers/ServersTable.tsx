"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import Image from "next/image";
import { capitalize } from "@/utils/capitalize";
import { cn } from "@/lib/utils";
import { type Server } from "@/app/[page]/page";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { useCopyServerAddress } from "@/components/modules/servers/serverTableRow/useCopyServerAddress";

type ServersTableProps = {
  page: number;
  servers: Server[];
};
export const ServersTable = ({ page, servers }: ServersTableProps) => {
  const { copyIp } = useCopyServerAddress();

  return (
    <>
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
          {servers.map((server, index) => (
            <TableRow className="whitespace-nowrap odd:bg-muted/40 hover:odd:bg-muted dark:odd:bg-muted/25 dark:hover:bg-muted/10">
              <TableCell className="font-medium">
                {(page - 1) * SERVERS_LIMIT_PER_PAGE + (index + 1)}
              </TableCell>
              <TableCell className="py-2">
                <button
                  onClick={() => copyIp(server.name)}
                  className="flex w-full py-2 text-left"
                  aria-label={`Skopiuj adres serwera ${server.name} do schowka`}
                >
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
                    <div className="max-w-96 overflow-hidden">
                      {server.motdFirstLine && <p>{server.motdFirstLine}</p>}
                      {server.motdSecondLine && <p>{server.motdSecondLine}</p>}
                    </div>
                  </div>
                </button>
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
    </>
  );
};
