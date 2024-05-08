import {
  PaginationItem,
  PaginationPrevious as ShadcnPaginationPrevious,
} from "@/components/ui-library/pagination";

type PaginationPreviousProps = {
  prevPageLink: string;
};

export const PaginationPrevious = ({
  prevPageLink,
}: PaginationPreviousProps) => {
  return (
    <PaginationItem>
      <ShadcnPaginationPrevious href={prevPageLink} />
    </PaginationItem>
  );
};
