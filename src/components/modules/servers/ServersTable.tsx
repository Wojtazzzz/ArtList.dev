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
import { type Server } from "@/app/page";
import { useServersTable } from "@/components/modules/servers/useServersTable";
import { useRouter } from "next/navigation";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { type ChangeEvent } from "react";
import { useServersPaginationParams } from "@/components/modules/servers/useServersPaginationParams";

type DemoServersTableProps = {
  servers: Server[];
};

export function ServersTable({ servers }: DemoServersTableProps) {
  const { table, columnsCount } = useServersTable(servers);
  const { page, name } = useServersPaginationParams();

  const router = useRouter();

  const filterServersByName = (event: ChangeEvent<HTMLInputElement>) => {
    router.push(`/?name=${event.target.value}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Wyszukaj po nazwie"
          value={name ?? ""}
          onChange={filterServersByName}
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
                        {(Math.max(1, page) - 1) * SERVERS_LIMIT_PER_PAGE +
                          (rowIndex + 1)}
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
    </div>
  );
}
