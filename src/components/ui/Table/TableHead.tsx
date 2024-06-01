import { type ReactNode } from "react";
import { TableHead as UITableHead } from "@/components/ui-library/table";

type TableHeadProps = {
  children: ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => {
  return <UITableHead>{children}</UITableHead>;
};
