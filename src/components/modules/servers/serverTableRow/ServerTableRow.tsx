"use client";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui-library/table";
import { capitalize } from "@/utils/capitalize";
import { type Server } from "@/app/[page]/page";
import Image from "next/image";
import { useCopyServerAddress } from "@/components/modules/servers/serverTableRow/useCopyServerAddress";

type ServerTableRowProps = {
  server: Server;
  index: number;
};

export const ServerTableRow = ({ server, index }: ServerTableRowProps) => {
  const { copyIp } = useCopyServerAddress();

  return (
    <TableRow
      className={cn("whitespace-nowrap", {
        "bg-muted": index % 2 === 0,
      })}
    >
      <TableCell className="font-medium">{index}</TableCell>
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
  );
};
