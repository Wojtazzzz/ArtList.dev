import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import { ServersTable } from '@/components/modules/servers/ServersTable';
import { getPaginatedServers } from '@/services/getPaginatedServers';
import { getPageParam } from '@/utils/getPageParam';
import { DynamicPagination } from '@/components/modules/servers/paginations/DynamicPagination';
import { Suspense } from 'react';

type SearchPageParams = {
	searchParams: {
		page?: string;
		name?: string;
		sort?: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageParams) {
	const response = await getPaginatedServers(
		getPageParam(searchParams.page),
		SERVERS_LIMIT_PER_PAGE,
		{
			name: searchParams.name,
		},
		searchParams.sort
	);

	return (
		<>
			<ServersTable
				servers={response.servers}
				page={response.page}
				defaultSort={searchParams.sort ?? '-players'}
			/>

			<div className="mt-6">
				<Suspense>
					<DynamicPagination
						lastPage={response.lastPage}
						page={response.page}
						nextPage={response.nextPage}
						prevPage={response.prevPage}
					/>
				</Suspense>
			</div>
		</>
	);
}
