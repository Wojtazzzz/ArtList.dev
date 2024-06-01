import { type ReactNode } from 'react';
import { TableBody as UITableBody } from '@/components/ui-library/table';

type TableBodyProps = {
	children: ReactNode;
};

export const TableBody = ({ children }: TableBodyProps) => {
	return <UITableBody>{children}</UITableBody>;
};
