import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { z } from 'zod';

const prisma = new PrismaClient();

const serverSchema = z.object({
	ip: z.string(),
	motd: z.object({
		html: z.array(z.string()),
	}),
	players: z.object({
		online: z.number(),
		max: z.number(),
	}),
	version: z.string(),
	hostname: z.string(),
	icon: z.string(),
});

const fetchServer = async () => {
	const response = await axios
		.get(`https://api.mcsrvstat.us/2/hypixel.net`)
		.then((response) => response.data);

	return serverSchema.parse(response);
};

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
