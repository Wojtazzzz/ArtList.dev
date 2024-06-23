import { prisma } from '@/prisma';
import type { Prisma } from '@prisma/client';

type GetServersData = {
	skip: number;
	limit: number;
	orderBy: Prisma.ServerOrderByWithRelationInput[];
	filter: Prisma.ServerWhereInput;
};

export const getServers = async ({
	skip,
	limit,
	orderBy,
	filter,
}: GetServersData) => {
	return prisma.server.findMany({
		skip,
		take: limit,
		orderBy,
		where: filter,
		select: {
			id: true,
			name: true,
			version: true,
			max_players: true,
			current_players: true,
			online: true,
			motd_first_line: true,
			motd_second_line: true,
			icon: true,
			updated_at: true,
		},
	});
};
