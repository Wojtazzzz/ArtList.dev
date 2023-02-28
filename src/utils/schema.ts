import { z } from 'zod';

export const serverSchema = z.object({
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
