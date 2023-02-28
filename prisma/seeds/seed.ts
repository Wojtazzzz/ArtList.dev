import { serverSchema } from '@/utils/schema';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const fetchServer = async () => {
	const response = await axios
		.get(`https://api.mcsrvstat.us/2/hypixel.net`)
		.then((response) => response.data);

	return serverSchema.parse(response);
};

const prisma = new PrismaClient();

async function main() {
	await prisma.server.deleteMany({});

	const server = await fetchServer();

	await prisma.server.create({
		data: {
			ip: server.hostname,
			online: server.players.online,
			slots: server.players.max,
			tags: ['pvp', 'minigame'],
			version: server.version,
			icon: server.icon,
			motd: server.motd.html,
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
