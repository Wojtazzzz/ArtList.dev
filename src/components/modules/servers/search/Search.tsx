"use client";

import { Input } from "@/components/ui-library/input";
import { useSearch } from "@/components/modules/servers/search/useSearch";

export const Search = () => {
  const { value, onChangeValue } = useSearch();

  return (
    <div>
      <Input
        placeholder="Wyszukaj po nazwie"
        value={value}
        onChange={onChangeValue}
        className="max-w-sm"
      />
    </div>
  );
};
