export const getPageParam = (page: string | null | undefined) => {
	if (!page) {
		return 0;
	}

	const numericPage = Number(page);

	if (isNaN(numericPage)) {
		return 0;
	}

	return numericPage;
};
