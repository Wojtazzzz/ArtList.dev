export const capitalize = (text: string) => {
	if (text.length <= 0) {
		return '';
	}

	return text[0].toUpperCase() + text.slice(1);
};

export const buildParams = (
	params: Record<string, string | null | undefined | number>
) => {
	const searchParams = new URLSearchParams();

	for (const [key, value] of Object.entries(params)) {
		if (!value) {
			continue;
		}

		searchParams.append(key, String(value));
	}

	return searchParams.toString();
};
