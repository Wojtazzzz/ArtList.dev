"use client";

import { ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { type Server } from "@/utils/schema";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import Image from "next/image";
import { capitalize } from "@/utils/capitalize";
import { cn } from "@/lib/utils";
import { useServersSort } from "@/components/modules/servers/useServersSort";
import { CopyButton } from "@/components/ui/CopyButton";
import { useCopyServerAddress } from "@/components/modules/servers/useCopyServerAddress";

type ServersTableProps = {
  servers: Server[];
  page: number;
  defaultSort?: string;
};

export function ServersTable({
  servers,
  page,
  defaultSort = "-players",
}: ServersTableProps) {
  const { sortByName, sortByPlayers } = useServersSort(defaultSort);
  const { copyIp } = useCopyServerAddress();

  return (
    <div className="w-full">
      <Table>
        <TableCaption>Lista serwerów Minecraft.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>
              <button className="flex items-center" onClick={sortByName}>
                Nazwa
                <span className="sr-only">
                  Sortuj według nazwy, alfabetycznie
                </span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </button>
            </TableHead>
            <TableHead>
              <button className="flex items-center" onClick={sortByPlayers}>
                Gracze
                <span className="sr-only">
                  Sortuj według ilości aktywnych graczy
                </span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </button>
            </TableHead>
            <TableHead>Wersja</TableHead>
            <TableHead>
              <div className="text-right">Opcje</div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {servers.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                Brak serwerów.
              </TableCell>
            </TableRow>
          ) : (
            servers.map((server, index) => (
              <TableRow
                key={server.id}
                className="whitespace-nowrap odd:bg-muted/40 hover:odd:bg-muted dark:odd:bg-muted/25 dark:hover:bg-muted/10"
              >
                <TableCell>
                  <div className="font-medium">
                    {(Math.max(1, page) - 1) * SERVERS_LIMIT_PER_PAGE +
                      (index + 1)}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex gap-x-1">
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
                        {server.motdSecondLine && (
                          <p>{server.motdSecondLine}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className={cn({ "text-red-600": !server.online })}>
                    {server.currentPlayers} / {server.maxPlayers}
                  </span>
                </TableCell>

                <TableCell>
                  <p
                    className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
                    title={server.version ?? undefined}
                  >
                    {server.version}
                  </p>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end">
                    <CopyButton
                      label="Skopiuj adres IP serwera do schowka"
                      onClick={() => copyIp(server.name)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
