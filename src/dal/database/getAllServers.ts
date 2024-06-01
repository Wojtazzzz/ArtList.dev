import { prisma } from '@/prisma';

export const getAllServers = async () => {
	return prisma.server.findMany({
		select: {
			id: true,
			name: true,
		},
	});
};
