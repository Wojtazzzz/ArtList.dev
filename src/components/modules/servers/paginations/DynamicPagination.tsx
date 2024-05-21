"use client";

import { PaginationPrevious } from "@/components/ui/pagination/PaginationPrevious";
import { PaginationItem } from "@/components/ui/pagination/PaginationItem";
import { PaginationEllipsis } from "@/components/ui/pagination/PaginationEllipsis";
import { PaginationNext } from "@/components/ui/pagination/PaginationNext";
import { PaginationContainer } from "@/components/ui/pagination/PaginationContainer";
import { useDynamicPagination } from "@/components/modules/servers/paginations/useDynamicPagination";

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
  const { otherParams } = useDynamicPagination();

  return (
    <PaginationContainer>
      {prevPage && (
        <PaginationPrevious
          prevPageLink={`/search?page=${prevPage}&${otherParams}`}
        />
      )}

      {page - 2 > 0 && (
        <PaginationItem pageLink={`/search?page=${page - 2}&${otherParams}`}>
          {page - 2}
        </PaginationItem>
      )}

      {prevPage && (
        <PaginationItem pageLink={`/search?page=${prevPage}&${otherParams}`}>
          {prevPage}
        </PaginationItem>
      )}

      <PaginationItem
        pageLink={`/search?page=${page - 2}&${otherParams}`}
        isActive
      >
        {page}
      </PaginationItem>

      {nextPage && (
        <PaginationItem pageLink={`/search?page=${nextPage}&${otherParams}`}>
          {nextPage}
        </PaginationItem>
      )}

      {lastPage >= page + 2 && (
        <PaginationItem pageLink={`/search?page=${page + 2}&${otherParams}`}>
          {page + 2}
        </PaginationItem>
      )}

      {lastPage >= page + 3 && <PaginationEllipsis />}

      {nextPage && (
        <PaginationNext
          nextPageLink={`/search?page=${nextPage}&${otherParams}`}
        />
      )}
    </PaginationContainer>
  );
};
