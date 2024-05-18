import { ColumnDef } from "@tanstack/react-table";
import { type Server } from "@/app/page";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { capitalize } from "@/utils/capitalize";
import { cn } from "@/lib/utils";
import { CopyIpButton } from "@/components/modules/servers/CopyIpButton";

export const columns: ColumnDef<Server>[] = [
  {
    id: "index",
    enableSorting: false,
    enableHiding: false,
    header: () => "#",
    cell: () => null,
  },
  {
    id: "nazwa",
    accessorKey: "name",
    header: ({ column }) => (
      <button
        className="flex items-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nazwa
        <span className="sr-only">Sortuj według nazwy, alfabetycznie</span>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="flex gap-x-1">
        <div className="my-auto mr-3.5 h-full w-[58px]">
          {row.original.icon && (
            <Image
              src={row.original.icon}
              alt="Logo serwera"
              width="58"
              height="58"
            />
          )}
        </div>

        <div>
          <p className="mb-1 text-base font-medium">
            {capitalize(row.original.name)}
          </p>
          <div className="max-w-96 overflow-hidden">
            {row.original.motdFirstLine && <p>{row.original.motdFirstLine}</p>}
            {row.original.motdSecondLine && (
              <p>{row.original.motdSecondLine}</p>
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "gracze",
    accessorKey: "currentPlayers",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gracze
          <span className="sr-only">Sortuj według ilości aktywnych graczy</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <span className={cn({ "text-red-600": !row.original.online })}>
        {row.original.currentPlayers} / {row.original.maxPlayers}
      </span>
    ),
  },
  {
    id: "wersja",
    accessorKey: "version",
    header: () => <div>Wersja</div>,
    cell: ({ row }) => (
      <p
        className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
        title={row.original.version ?? undefined}
      >
        {row.original.version}
      </p>
    ),
  },
  {
    id: "options",
    enableSorting: false,
    enableHiding: false,
    header: () => <div className="text-right">Opcje</div>,
    cell: ({ row }) => (
      <div className="flex justify-end gap-x-1.5">
        <CopyIpButton ip={row.original.name} />
      </div>
    ),
  },
];
