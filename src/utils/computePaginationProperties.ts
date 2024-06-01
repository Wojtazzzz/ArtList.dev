export const computePaginationProperties = async (
	page: number,
	limit: number,
	recordsCount: number
) => {
	const currentPage = page === 0 ? 1 : page;
	const lastPage = Math.ceil(recordsCount / limit);

	return {
		currentPage,
		lastPage,
		nextPage: currentPage >= lastPage ? null : currentPage + 1,
		prevPage: currentPage > 1 ? currentPage - 1 : null,
		skip: limit * Math.max(0, page - 1),
	};
};
