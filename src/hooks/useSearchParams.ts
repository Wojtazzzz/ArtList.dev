import { useSearchParams as useNextSearchParams } from "next/navigation";

export const useSearchParams = () => {
  const searchParams = useNextSearchParams();

  const filterSearchParams = (excludedParams: string[]) => {
    return Array.from(searchParams.entries())
      .filter(([key]) => {
        return !excludedParams.includes(key);
      })
      .map(([key, value]) => {
        return `${key}=${value}`;
      });
  };

  const getSearchParam = (param: string) => {
    return searchParams.get(param);
  };

  return {
    filterSearchParams,
    getSearchParam,
  };
};
