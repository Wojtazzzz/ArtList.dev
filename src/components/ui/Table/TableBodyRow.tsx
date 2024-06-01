import { type ReactNode } from "react";
import { TableRow as UITableRow } from "@/components/ui-library/table";

type TableBodyRowProps = {
  children: ReactNode;
};

export const TableBodyRow = ({ children }: TableBodyRowProps) => {
  return (
    <UITableRow className="whitespace-nowrap odd:bg-muted/40 hover:odd:bg-muted dark:odd:bg-muted/25 dark:hover:bg-muted/10">
      {children}
    </UITableRow>
  );
};
