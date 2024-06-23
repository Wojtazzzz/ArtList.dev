'use server';

import { revalidatePath } from 'next/cache';
import { API_URL } from '@/utils/env';

export type AddServerPayload = {
	name: string;
};

export const addServer = async ({ name }: AddServerPayload) => {
	if (name.length <= 0) {
		return {
			error: 'Podano nieprawidłową nazwę serwera',
		};
	}

	const response = await fetch(API_URL + '/servers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
		body: JSON.stringify({
			name,
		}),
	});

	const data = await response.json();

	if (!data.success) {
		return {
			error: data.error,
		};
	}

	revalidatePath('/(servers-list)', 'layout');

	return {};
};
