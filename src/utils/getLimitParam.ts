export const getLimitParam = (
	limit: string | null | undefined,
	defaultValue: number
) => {
	if (!limit) {
		return defaultValue;
	}

	const numericLimit = Number(limit);

	if (isNaN(numericLimit)) {
		return defaultValue;
	}

	return numericLimit;
};
