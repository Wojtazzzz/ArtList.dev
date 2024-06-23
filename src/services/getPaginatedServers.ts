import { getServersCount } from '@/dal/database/getServersCount';
import { computePaginationProperties } from '@/utils/computePaginationProperties';
import { API_URL } from '@/utils/env';

type FilterServers =
	| {
			name: string | undefined;
	  }
	| undefined;

export const getPaginatedServers = async (
	page: number,
	limit: number,
	filter?: FilterServers,
	sort?: string
) => {
	const filterProp = {
		name: {
			contains: filter?.name ? filter.name : '',
			mode: 'insensitive',
		},
	} as const;

	const serversCount = await getServersCount(filterProp);

	const { currentPage, nextPage, prevPage, lastPage, skip } =
		await computePaginationProperties(page, limit, serversCount);

	const response = await fetch(
		`${API_URL}/servers?page=${page}&limit=${limit}`
	);

	const data = await response.json();

	return {
		page: currentPage,
		nextPage,
		prevPage,
		lastPage,
		servers: data.servers,
	};
};

type SortBy = {
	[key in string]: 'desc' | 'asc';
}[];

function computeOrderBy(sort?: string): SortBy {
	if (!sort) {
		return [
			{
				online: 'desc',
			},
			{
				current_players: 'desc',
			},
			{
				max_players: 'desc',
			},
		];
	}

	if (sort === 'name') {
		return [
			{
				name: 'asc',
			},
			{
				online: 'desc',
			},
			{
				current_players: 'desc',
			},
			{
				max_players: 'desc',
			},
		];
	}

	if (sort === '-name') {
		return [
			{
				name: 'desc',
			},
			{
				online: 'desc',
			},
			{
				current_players: 'desc',
			},
			{
				max_players: 'desc',
			},
		];
	}

	if (sort === 'players') {
		return [
			{
				online: 'desc',
			},
			{
				current_players: 'asc',
			},
			{
				max_players: 'desc',
			},
		];
	}

	if (sort === '-players') {
		return [
			{
				online: 'desc',
			},
			{
				current_players: 'desc',
			},
			{
				max_players: 'desc',
			},
		];
	}

	return [
		{
			online: 'desc',
		},
		{
			current_players: 'desc',
		},
		{
			max_players: 'desc',
		},
	];
}
