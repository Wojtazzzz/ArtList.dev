"use client";

import { PaginationPrevious } from "@/components/ui/pagination/PaginationPrevious";
import { PaginationItem } from "@/components/ui/pagination/PaginationItem";
import { PaginationEllipsis } from "@/components/ui/pagination/PaginationEllipsis";
import { PaginationNext } from "@/components/ui/pagination/PaginationNext";
import { PaginationContainer } from "@/components/ui/pagination/PaginationContainer";
import { useSearchParams } from "next/navigation";

type ServersPaginationProps = {
  page: number;
  prevPage: number | null;
  nextPage: number | null;
  lastPage: number;
};

export const ServersPagination = ({
  page,
  prevPage,
  nextPage,
  lastPage,
}: ServersPaginationProps) => {
  const searchParams = useSearchParams();

  const nameParam = searchParams.get("name");

  const params = nameParam ? `&name=${nameParam}` : "";

  return (
    <PaginationContainer>
      {prevPage && (
        <PaginationPrevious prevPageLink={`/?page=${prevPage}${params}`} />
      )}

      {page - 2 > 0 && (
        <PaginationItem pageLink={`/?page=${page - 2}${params}`}>
          {page - 2}
        </PaginationItem>
      )}

      {prevPage && (
        <PaginationItem pageLink={`/?page=${prevPage}${params}`}>
          {prevPage}
        </PaginationItem>
      )}

      <PaginationItem pageLink={`/?page=${page - 2}${params}`} isActive>
        {page}
      </PaginationItem>

      {nextPage && (
        <PaginationItem pageLink={`/?page=${nextPage}${params}`}>
          {nextPage}
        </PaginationItem>
      )}

      {lastPage >= page + 2 && (
        <PaginationItem pageLink={`/${page + 2}${params}`}>
          {page + 2}
        </PaginationItem>
      )}

      {lastPage >= page + 3 && <PaginationEllipsis />}

      {nextPage && (
        <PaginationNext nextPageLink={`/?page=${nextPage}${params}`} />
      )}
    </PaginationContainer>
  );
};
