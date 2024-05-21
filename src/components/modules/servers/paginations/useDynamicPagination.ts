import { useSearchParams } from "next/navigation";

export const useDynamicPagination = () => {
  const searchParams = useSearchParams();

  const otherParams = Array.from(searchParams.entries())
    .filter(([key, value]) => {
      return key !== "page";
    })
    .map(([key, value]) => {
      return `${key}=${value}`;
    });

  return {
    otherParams: otherParams.join("&"),
  };
};
