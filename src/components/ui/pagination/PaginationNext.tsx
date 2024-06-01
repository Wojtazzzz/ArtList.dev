import {
	PaginationItem,
	PaginationNext as ShadcnPaginationNext,
} from '@/components/ui-library/pagination';

type PaginationNextProps = {
	nextPageLink: string;
};

export const PaginationNext = ({ nextPageLink }: PaginationNextProps) => {
	return (
		<PaginationItem>
			<ShadcnPaginationNext href={nextPageLink} />
		</PaginationItem>
	);
};
