import { API_URL } from "@/utils/env";

export const serverFetch = async (path: string) => {
  const response = await fetch(API_URL + path);

  if (!response.ok) {
    throw new Error("Fetch error");
  }

  return (await response.json()) as any[];
};
