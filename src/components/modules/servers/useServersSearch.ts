import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

export const useServersSearch = () => {
  const router = useRouter();

  const filterServersByName = (event: ChangeEvent<HTMLInputElement>) => {
    router.push(`/?name=${event.target.value}`);
  };

  return {
    filterServersByName,
  };
};
