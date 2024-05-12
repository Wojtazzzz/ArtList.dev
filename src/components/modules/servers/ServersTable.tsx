"use client";

import { flexRender } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
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
import { Server } from "@/app/[page]/page";
import { PaginationPrevious } from "@/components/ui/pagination/PaginationPrevious";
import { PaginationItem } from "@/components/ui/pagination/PaginationItem";
import { PaginationEllipsis } from "@/components/ui/pagination/PaginationEllipsis";
import { PaginationNext } from "@/components/ui/pagination/PaginationNext";
import { PaginationContainer } from "@/components/ui/pagination/PaginationContainer";
import { useServersTable } from "@/components/modules/servers/useServersTable";
import { usePaginationParams } from "@/hooks/usePaginationParams";

type DemoServersTableProps = {
  servers: Server[];
};

export function ServersTable({ servers }: DemoServersTableProps) {
  const { page, limit } = usePaginationParams();
  const { table, columnsCount } = useServersTable(servers);

  return (
    <div className="w-full">
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
              <TableCell colSpan={columnsCount} className="h-24 text-center">
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
