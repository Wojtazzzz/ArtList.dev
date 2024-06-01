import { type ReactNode } from 'react';
import { TableCell as UITableCell } from '@/components/ui-library/table';

type TableCellProps = {
	colSpan?: number;
	children: ReactNode;
};

export const TableCell = ({ colSpan, children }: TableCellProps) => {
	return <UITableCell colSpan={colSpan}>{children}</UITableCell>;
};
