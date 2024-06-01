import { prisma } from '@/prisma';

export const getServerByName = async (name: string) => {
	return prisma.server.findFirst({
		where: {
			OR: [
				{
					name: {
						equals: name,
						mode: 'insensitive',
					},
				},
			],
		},
	});
};
