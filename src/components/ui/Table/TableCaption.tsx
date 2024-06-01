import { type ReactNode } from 'react';
import { TableCaption as UITableCaption } from '@/components/ui-library/table';

type TableCaptionProps = {
	children: ReactNode;
};

export const TableCaption = ({ children }: TableCaptionProps) => {
	return <UITableCaption>{children}</UITableCaption>;
};
