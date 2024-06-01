import {
	PaginationItem as ShadcnPaginationItem,
	PaginationLink,
} from '@/components/ui-library/pagination';
import { type ReactNode } from 'react';

type PaginationItemProps = {
	pageLink: string;
	isActive?: boolean;
	children: ReactNode;
};

export const PaginationItem = ({
	pageLink,
	isActive = false,
	children,
}: PaginationItemProps) => {
	return (
		<ShadcnPaginationItem>
			<PaginationLink isActive={isActive} href={pageLink}>
				{children}
			</PaginationLink>
		</ShadcnPaginationItem>
	);
};
