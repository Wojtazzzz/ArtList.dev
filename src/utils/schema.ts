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
			motd_first_line: z.string().nullable(),
			motd_second_line: z.string().nullable(),
			current_players: z.number(),
			max_players: z.number(),
			online: z.boolean(),
			icon: z.string().nullable(),
		})
	),
});

export type Server = z.infer<typeof serversSchema>['data'][0];
