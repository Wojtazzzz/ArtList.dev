import { useState } from "react";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { type Server } from "@/app/page";
import { columns } from "@/components/modules/servers/tableColumns";
import { SERVERS_LIMIT_PER_PAGE } from "@/utils/env";
import { usePaginationParams } from "@/hooks/usePaginationParams";

export const useServersTable = (servers: Server[]) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const { page } = usePaginationParams();

  const [pagination] = useState({
    pageSize: SERVERS_LIMIT_PER_PAGE,
    pageIndex: page,
  });

  const table = useReactTable({
    data: servers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    manualPagination: true,
    manualFiltering: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
  });

  return {
    table,
    columnsCount: columns.length,
  };
};
