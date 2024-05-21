"use client";

import { PaginationPrevious } from "@/components/ui/pagination/PaginationPrevious";
import { PaginationItem } from "@/components/ui/pagination/PaginationItem";
import { PaginationEllipsis } from "@/components/ui/pagination/PaginationEllipsis";
import { PaginationNext } from "@/components/ui/pagination/PaginationNext";
import { PaginationContainer } from "@/components/ui/pagination/PaginationContainer";
import { useSearchParams } from "@/hooks/useSearchParams";

type DynamicPaginationProps = {
  page: number;
  prevPage: number | null;
  nextPage: number | null;
  lastPage: number;
};

export const DynamicPagination = ({
  page,
  prevPage,
  nextPage,
  lastPage,
}: DynamicPaginationProps) => {
  const { filterSearchParams } = useSearchParams();

  const currentSearchParams = filterSearchParams(["page"]);

  return (
    <PaginationContainer>
      {prevPage && (
        <PaginationPrevious
          prevPageLink={`/szukaj?page=${prevPage}&${currentSearchParams}`}
        />
      )}

      {page - 2 > 0 && (
        <PaginationItem
          pageLink={`/szukaj?page=${page - 2}&${currentSearchParams}`}
        >
          {page - 2}
        </PaginationItem>
      )}

      {prevPage && (
        <PaginationItem
          pageLink={`/szukaj?page=${prevPage}&${currentSearchParams}`}
        >
          {prevPage}
        </PaginationItem>
      )}

      <PaginationItem
        pageLink={`/szukaj?page=${page}&${currentSearchParams}`}
        isActive
      >
        {page}
      </PaginationItem>

      {nextPage && (
        <PaginationItem
          pageLink={`/szukaj?page=${nextPage}&${currentSearchParams}`}
        >
          {nextPage}
        </PaginationItem>
      )}

      {lastPage >= page + 2 && (
        <PaginationItem
          pageLink={`/szukaj?page=${page + 2}&${currentSearchParams}`}
        >
          {page + 2}
        </PaginationItem>
      )}

      {lastPage >= page + 3 && <PaginationEllipsis />}

      {nextPage && (
        <PaginationNext
          nextPageLink={`/szukaj?page=${nextPage}&${currentSearchParams}`}
        />
      )}
    </PaginationContainer>
  );
};
