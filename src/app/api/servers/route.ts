import { getPaginatedServers } from '@/services/getPaginatedServers';
import { getPageParam } from '@/utils/getPageParam';
import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
	const pageParam = getPageParam(request.nextUrl.searchParams.get('page'));

	const { page, nextPage, prevPage, lastPage, servers } =
		await getPaginatedServers(pageParam, SERVERS_LIMIT_PER_PAGE, {
			name: request.nextUrl.searchParams.get('name') ?? '',
		});

	return Response.json({
		page,
		nextPage,
		prevPage,
		lastPage,
		servers,
	});
}
