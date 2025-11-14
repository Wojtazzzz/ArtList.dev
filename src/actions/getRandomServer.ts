'use server';

import { API_URL } from '@/utils/env';
import type { Server } from '@/utils/schema';

export const getRandomServer = async (): Promise<{
	server?: Server;
	error?: string;
}> => {
	try {
		const response = await fetch(API_URL + '/servers/random', {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
			cache: 'no-cache',
		});

		if (!response.ok) {
			return {
				error: 'Nie udało się pobrać losowego serwera. Spróbuj ponownie.',
			};
		}

		const server = await response.json();

		return { server };
	} catch (error) {
		return {
			error: 'Coś poszło nie tak. Proszę spróbować ponownie później.',
		};
	}
};
