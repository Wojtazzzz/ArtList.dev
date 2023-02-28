import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { z } from 'zod';

const prisma = new PrismaClient();

const onlineServer = z.object({
	online: z.literal(true),
	ip: z.string(),
	hostname: z.string(),
	port: z.number(),
	motd: z
		.object({
			html: z.array(z.string()),
		})
		.optional(),
	players: z.object({
		online: z.number(),
		max: z.number(),
	}),
	version: z.string(),

	icon: z.string(),
});

const offlineServer = z.object({
	online: z.literal(false),
	ip: z.string(),
	hostname: z.string(),
	port: z.number(),
});

const serverSchema = z.union([onlineServer, offlineServer]);

const fetchServer = async (ip: string) => {
	const response = await axios
		.get(`https://api.mcsrvstat.us/2/${ip}`)
		.then((response) => response.data);

	return serverSchema.parse(response);
};

const servers = [
	'hypixel.net',
	'craftmc.pl',
	'mc.craftapple.pl',
	'minefox.pl',
	'mc.realcraft.pl',
	'ekipa.pro',
	'minecrafter.pl',
	'przygodacraft.pl',
	'dcrft.pl',
	'legacymc.pl',
	'unitedingeo.pl',
];

async function main() {
	await prisma.server.deleteMany({});

	servers.forEach(async (ip) => {
		const server = await fetchServer(ip);

		if (!server.online) {
			return;
		}

		await prisma.server.create({
			data: {
				ip: server.hostname,
				online: server.players.online,
				slots: server.players.max,
				tags: ['pvp', 'minigame'],
				version: server.version,
				icon: server.icon,
				motd: server.motd?.html,
			},
		});
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
