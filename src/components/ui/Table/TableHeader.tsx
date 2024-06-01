import { type ReactNode } from "react";
import { TableHeader as UITableHeader } from "@/components/ui-library/table";

type TableHeaderProps = {
  children: ReactNode;
};

export const TableHeader = ({ children }: TableHeaderProps) => {
  return <UITableHeader>{children}</UITableHeader>;
};
