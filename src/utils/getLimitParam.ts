export const getLimitParam = (limit: string | null | undefined) => {
  if (!limit) {
    return 50;
  }

  const numericLimit = Number(limit);

  if (isNaN(numericLimit)) {
    return 50;
  }

  return numericLimit;
};
