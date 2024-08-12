import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import { ServersTable } from '@/components/modules/servers/ServersTable';
import { StaticPagination } from '@/components/modules/servers/paginations/StaticPagination';
import { fetchData } from '@/utils/clients';
import { buildParams } from '@/utils/functions';
import { Servers } from '@/components/modules/servers/Servers';

export async function generateStaticParams() {
	const serversCount = await fetchData('/servers/count', 0);

	return Array.from({
		length: Math.ceil(serversCount / SERVERS_LIMIT_PER_PAGE),
	}).map((_, index) => ({
		page: String(index + 1),
	}));
}

const fetchServersPage = async (pageParam: string) => {
	const params = buildParams({
		page: pageParam,
		limit: SERVERS_LIMIT_PER_PAGE,
	});

	const { page, lastPage, prevPage, nextPage, data } = await fetchData(
		`/servers?${params}`,
		60 * 15
	);

	return {
		page,
		lastPage,
		nextPage,
		prevPage,
		servers: data,
	};
};

type ServersPaginatedPageParams = {
	params: {
		page?: string;
	};
};

export default async function ServersPaginatedPage({
	params,
}: ServersPaginatedPageParams) {
	const response = await fetchServersPage(params?.page ?? '1');

	return (
		<div className="space-y-6">
			<Servers servers={response.servers} page={response.page} />

			<StaticPagination
				lastPage={response.lastPage}
				page={response.page}
				nextPage={response.nextPage}
				prevPage={response.prevPage}
			/>
		</div>
	);
}
