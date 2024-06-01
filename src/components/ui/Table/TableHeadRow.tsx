import { type ReactNode } from "react";
import { TableRow as UITableRow } from "@/components/ui-library/table";

type TableHeadRowProps = {
  children: ReactNode;
};

export const TableHeadRow = ({ children }: TableHeadRowProps) => {
  return <UITableRow>{children}</UITableRow>;
};
