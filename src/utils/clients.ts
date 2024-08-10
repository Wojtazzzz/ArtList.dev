import { API_URL } from '@/utils/env';

// type RequestCache =
// 	| 'default'
// 	| 'force-cache'
// 	| 'no-cache'
// 	| 'no-store'
// 	| 'only-if-cached'
// 	| 'reload';

export const fetchData = async (path: string, revalidate: number | false) => {
	const response = await fetch(API_URL + path, {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
		next: {
			revalidate,
		},
	});

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
