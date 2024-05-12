"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui-library/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui-library/dropdown-menu";
import { Input } from "@/components/ui-library/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-library/table";
import { useState } from "react";
import { Server } from "@/app/[page]/page";
import { useSearchParams } from "next/navigation";
import { getPageParam } from "@/utils/getPageParam";
import { getLimitParam } from "@/utils/getLimitParam";
import { PaginationPrevious } from "@/components/ui/pagination/PaginationPrevious";
import { PaginationItem } from "@/components/ui/pagination/PaginationItem";
import { PaginationEllipsis } from "@/components/ui/pagination/PaginationEllipsis";
import { PaginationNext } from "@/components/ui/pagination/PaginationNext";
import { PaginationContainer } from "@/components/ui/pagination/PaginationContainer";
import Image from "next/image";
import { useCopyServerAddress } from "@/components/modules/servers/serverTableRow/useCopyServerAddress";
import { cn } from "@/lib/utils";
import { capitalize } from "@/utils/capitalize";

type DemoServersTableProps = {
  servers: Server[];
};

export function DemoServersTable({ servers }: DemoServersTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const searchParams = useSearchParams();

  const limitParam = searchParams.get("limit");

  const page = getPageParam(searchParams.get("page"));
  const limit = getLimitParam(isNaN(Number(limitParam)) ? "3" : limitParam);

  const [pagination, setPagination] = useState({
    pageIndex: page,
    pageSize: limit,
  });

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

  return (
    <div className="w-full">
      <p className="mb-6 mt-3 text-sm">
        Kliknij w nazwę serwera, aby skopiować jego adres.
      </p>

      <div className="flex items-center py-4">
        <Input
          placeholder="Wyszukaj po nazwie"
          value={(table.getColumn("nazwa")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("nazwa")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Pokaż kolumny <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="whitespace-nowrap odd:bg-muted/40 hover:odd:bg-muted dark:odd:bg-muted/25 dark:hover:bg-muted/10"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.id.includes("_index") ? (
                      <div className="font-medium">
                        {(Math.max(1, page) - 1) * limit + (rowIndex + 1)}
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Brak serwerów.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-6">
        <PaginationContainer>
          {table.getCanPreviousPage() && (
            <PaginationPrevious prevPageLink={`/?page=${page - 1}`} />
          )}

          {page - 2 > 0 && (
            <PaginationItem pageLink={`/?page=${page - 2}`}>
              {page - 2}
            </PaginationItem>
          )}

          {table.getCanPreviousPage() && (
            <PaginationItem pageLink={`/?page=${page - 1}`}>
              {page - 1}
            </PaginationItem>
          )}

          <PaginationItem pageLink={`/?page=${page - 2}`} isActive>
            {page}
          </PaginationItem>

          {table.getCanNextPage() && (
            <PaginationItem pageLink={`/?page=${page + 1}`}>
              {page + 1}
            </PaginationItem>
          )}

          {Number(table.lastPage) >= page + 2 && (
            <PaginationItem pageLink={`/?page=${page + 2}`}>
              {page + 2}
            </PaginationItem>
          )}

          {Number(table.lastPage) >= page + 3 && <PaginationEllipsis />}

          {table.getCanNextPage() && (
            <PaginationNext nextPageLink={`/?page=${page + 1}`} />
          )}
        </PaginationContainer>
      </div>
    </div>
  );
}
