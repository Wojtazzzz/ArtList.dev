import { useSearchParams } from "next/navigation";
import { getPageParam } from "@/utils/getPageParam";
import { getLimitParam } from "@/utils/getLimitParam";

export const usePaginationParams = () => {
  const searchParams = useSearchParams();

  const limitParam = searchParams.get("limit");

  const page = getPageParam(searchParams.get("page"));
  const limit = getLimitParam(isNaN(Number(limitParam)) ? "3" : limitParam, 3);

  return {
    page,
    limit,
  };
};
