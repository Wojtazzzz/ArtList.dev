import { ReactNode } from "react";
import {
  Pagination,
  PaginationContent,
} from "@/components/ui-library/pagination";

type PaginationProps = {
  children: ReactNode;
};

export const PaginationContainer = ({ children }: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>{children}</PaginationContent>
    </Pagination>
  );
};
