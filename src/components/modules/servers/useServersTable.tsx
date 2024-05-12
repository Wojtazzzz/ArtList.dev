import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useCopyServerAddress } from "@/components/modules/servers/useCopyServerAddress";
import { Server } from "@/app/[page]/page";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { capitalize } from "@/utils/capitalize";
import { cn } from "@/lib/utils";
import { usePaginationParams } from "@/hooks/usePaginationParams";

export const useServersTable = (servers: Server[]) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { page, limit } = usePaginationParams();

  const { copyIp } = useCopyServerAddress();

  const columns: ColumnDef<Server>[] = [
    {
      id: "index",
      header: () => "#",
      cell: () => null,
      enableSorting: false,
      enableHiding: false,
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
        <button
          onClick={() => copyIp(row.original.name)}
          className="flex w-full py-2 text-left"
          aria-label={`Skopiuj adres serwera ${row.original.name} do schowka`}
        >
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
              {row.original.motdFirstLine && (
                <p>{row.original.motdFirstLine}</p>
              )}
              {row.original.motdSecondLine && (
                <p>{row.original.motdSecondLine}</p>
              )}
            </div>
          </div>
        </button>
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
            <span className="sr-only">
              Sortuj według ilości aktywnych graczy
            </span>
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
      header: () => <div className="text-right">Wersja</div>,
      cell: ({ row }) => (
        <p
          className="ml-auto w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-right"
          title={row.original.version}
        >
          {row.original.version}
        </p>
      ),
    },
  ];

  const [pagination, setPagination] = useState({
    pageIndex: page,
    pageSize: limit,
  });

  const table = useReactTable({
    data: servers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return {
    table,
    columnsCount: columns.length,
  };
};
