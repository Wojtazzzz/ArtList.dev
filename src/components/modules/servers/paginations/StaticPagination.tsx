import { PaginationPrevious } from '@/components/ui/pagination/PaginationPrevious';
import { PaginationItem } from '@/components/ui/pagination/PaginationItem';
import { PaginationEllipsis } from '@/components/ui/pagination/PaginationEllipsis';
import { PaginationNext } from '@/components/ui/pagination/PaginationNext';
import { PaginationContainer } from '@/components/ui/pagination/PaginationContainer';

type StaticPaginationProps = {
	page: number;
	prevPage: number | null;
	nextPage: number | null;
	lastPage: number;
};

export const StaticPagination = ({
	page,
	prevPage,
	nextPage,
	lastPage,
}: StaticPaginationProps) => {
	return (
		<PaginationContainer>
			{prevPage && <PaginationPrevious prevPageLink={`/${prevPage}`} />}

			{page - 2 > 0 && (
				<PaginationItem pageLink={`/${page - 2}`}>{page - 2}</PaginationItem>
			)}

			{prevPage && (
				<PaginationItem pageLink={`/${prevPage}`}>{prevPage}</PaginationItem>
			)}

			<PaginationItem pageLink={`/${page}`} isActive>
				{page}
			</PaginationItem>

			{nextPage && (
				<PaginationItem pageLink={`/${nextPage}`}>{nextPage}</PaginationItem>
			)}

			{lastPage >= page + 2 && (
				<PaginationItem pageLink={`/${page + 2}`}>{page + 2}</PaginationItem>
			)}

			{lastPage >= page + 3 && <PaginationEllipsis />}

			{nextPage && <PaginationNext nextPageLink={`/${nextPage}`} />}
		</PaginationContainer>
	);
};
