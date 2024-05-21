import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "@/hooks/useSearchParams";

export const useSearch = () => {
  const { getSearchParam, filterSearchParams } = useSearchParams();
  const [value, setValue] = useState(getSearchParam("name") ?? "");
  const router = useRouter();

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    router.push(
      `/search?name=${event.target.value}&${filterSearchParams(["name"])}`,
    );
  };

  return {
    value,
    onChangeValue,
  };
};
