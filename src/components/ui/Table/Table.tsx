import { type ReactNode } from "react";
import { Table as UITable } from "@/components/ui-library/table";

type TableProps = {
  children: ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <div className="w-full">
      <UITable>{children}</UITable>
    </div>
  );
};
