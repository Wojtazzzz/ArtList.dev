export const computePaginationProperties = async (
  page: number,
  limit: number,
  count: number,
) => {
  const currentPage = page === 0 ? 1 : page;

  return {
    currentPage,
    lastPage: Math.ceil(count / limit),
    nextPage: currentPage >= count ? null : currentPage + 1,
    prevPage: currentPage > 1 ? currentPage - 1 : null,
    skip: limit * Math.max(0, page - 1),
  };
};
