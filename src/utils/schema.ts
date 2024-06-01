import { z } from 'zod';

const serversSchema = z.object({
	page: z.number(),
	prevPage: z.number().nullable(),
	nextPage: z.number().nullable(),
	lastPage: z.number(),
	data: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			version: z.string().nullable(),
			motdFirstLine: z.string().nullable(),
			motdSecondLine: z.string().nullable(),
			currentPlayers: z.number(),
			maxPlayers: z.number(),
			online: z.boolean(),
			icon: z.string().nullable(),
		})
	),
});

export type Server = z.infer<typeof serversSchema>['data'][0];
