import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import { ServersTable } from '@/components/modules/servers/ServersTable';
import { DynamicPagination } from '@/components/modules/servers/paginations/DynamicPagination';
import { Suspense } from 'react';
import { fetchData } from '@/utils/clients';
import { buildParams } from '@/utils/functions';

type SearchParams = {
	searchParams: {
		page?: string;
		name?: string;
		sort?: string;
	};
};

const fetchServers = async (searchParams: SearchParams['searchParams']) => {
	const params = buildParams({
		page: searchParams?.page ?? 1,
		limit: SERVERS_LIMIT_PER_PAGE,
		order: searchParams?.sort,
		name: searchParams?.name,
	});

	const { page, lastPage, prevPage, nextPage, data } = await fetchData(
		`/servers?${params}`,
		'no-store',
		0
	);

	return {
		page,
		lastPage,
		nextPage,
		prevPage,
		servers: data,
	};
};

export default async function SearchPage({ searchParams }: SearchParams) {
	const response = await fetchServers(searchParams);

	return (
		<div className="space-y-6">
			<ServersTable
				servers={response.servers}
				page={response.page}
				defaultSort={searchParams.sort ?? '-players'}
			/>

			<Suspense>
				<DynamicPagination
					lastPage={response.lastPage}
					page={response.page}
					nextPage={response.nextPage}
					prevPage={response.prevPage}
				/>
			</Suspense>
		</div>
	);
}
