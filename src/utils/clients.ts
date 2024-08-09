import { API_URL } from '@/utils/env';

export const fetchData = async (path: string) => {
	const response = await fetch(API_URL + path, {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
	});

	console.log('OK: ', API_URL + path);
	console.log('OK: ', response);

	if (!response.ok) {
		throw new Error('Fetch failed.');
	}

	return response.json();
};

type MutateDataArgs<Payload> = {
	method: 'POST' | 'PUT' | 'DELETE';
	path: string;
	payload: Payload;
};
export const mutateData = async <Payload extends {}>({
	method,
	path,
	payload,
}: MutateDataArgs<Payload>) => {
	const response = await fetch(API_URL + path, {
		method,
		headers: {
			accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error('Fetch failed.');
	}

	return response.json();
};
