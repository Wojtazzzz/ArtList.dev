import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "@/hooks/useSearchParams";
import { useDebouncedCallback } from "use-debounce";

export const useSearch = () => {
  const { getSearchParam, filterSearchParams } = useSearchParams();
  const [value, setValue] = useState(getSearchParam("name") ?? "");
  const router = useRouter();

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    pushParams(event.target.value);
  };

  const pushParams = useDebouncedCallback((name) => {
    router.push(`/search?name=${name}&${filterSearchParams(["name"])}`);
  }, 300);

  return {
    value,
    onChangeValue,
  };
};
