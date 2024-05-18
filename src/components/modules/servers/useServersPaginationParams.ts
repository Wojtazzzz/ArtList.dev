import { usePaginationParams } from "@/hooks/usePaginationParams";
import { useSearchParams } from "next/navigation";

export const useServersPaginationParams = () => {
  const searchParams = useSearchParams();
  const { page, limit } = usePaginationParams();

  const name = searchParams.get("name");

  return {
    page,
    limit,
    name,
  };
};
