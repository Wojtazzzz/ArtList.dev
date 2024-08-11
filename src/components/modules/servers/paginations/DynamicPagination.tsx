'use client';

import { PaginationPrevious } from '@/components/ui/pagination/PaginationPrevious';
import { PaginationItem } from '@/components/ui/pagination/PaginationItem';
import { PaginationEllipsis } from '@/components/ui/pagination/PaginationEllipsis';
import { PaginationNext } from '@/components/ui/pagination/PaginationNext';
import { PaginationContainer } from '@/components/ui/pagination/PaginationContainer';
import { useSearchParams } from '@/hooks/useSearchParams';
import { buildParams } from '@/utils/functions';

type DynamicPaginationProps = {
	page: number;
	prevPage: number | null;
	nextPage: number | null;
	lastPage: number;
};

export const DynamicPagination = ({
	page,
	prevPage,
	nextPage,
	lastPage,
}: DynamicPaginationProps) => {
	const { paramsObject } = useSearchParams();

	return (
		<PaginationContainer>
			{prevPage && (
				<PaginationPrevious
					prevPageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: prevPage })}`}
				/>
			)}

			{page - 2 > 0 && (
				<PaginationItem
					pageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: page - 2 })}`}
				>
					{page - 2}
				</PaginationItem>
			)}

			{prevPage && (
				<PaginationItem
					pageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: prevPage })}`}
				>
					{prevPage}
				</PaginationItem>
			)}

			<PaginationItem
				pageLink={`/szukaj?page=${buildParams({ ...paramsObject, page })}`}
				isActive
			>
				{page}
			</PaginationItem>

			{nextPage && (
				<PaginationItem
					pageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: nextPage })}`}
				>
					{nextPage}
				</PaginationItem>
			)}

			{lastPage >= page + 2 && (
				<PaginationItem
					pageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: page + 2 })}`}
				>
					{page + 2}
				</PaginationItem>
			)}

			{lastPage >= page + 3 && <PaginationEllipsis />}

			{nextPage && (
				<PaginationNext
					nextPageLink={`/szukaj?page=${buildParams({ ...paramsObject, page: nextPage })}`}
				/>
			)}
		</PaginationContainer>
	);
};
