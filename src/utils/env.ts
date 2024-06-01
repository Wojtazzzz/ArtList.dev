const parseEnv = (value: unknown, name: string) => {
	if (!value) {
		throw new Error(`Missing env variable called "${name}"`);
	}

	if (typeof value !== 'string') {
		throw new Error(`Unknown value of env variable called "${name}"`);
	}

	return value;
};

export const API_URL = parseEnv(
	process.env.NEXT_PUBLIC_API_URL,
	'NEXT_PUBLIC_API_URL'
);

export const APP_URL = parseEnv(
	process.env.NEXT_PUBLIC_APP_URL,
	'NEXT_PUBLIC_APP_URL'
);

export const SERVERS_LIMIT_PER_PAGE = Number(
	parseEnv(
		process.env.NEXT_PUBLIC_SERVERS_LIMIT_PER_PAGE,
		'NEXT_PUBLIC_SERVERS_LIMIT_PER_PAGE'
	)
);
