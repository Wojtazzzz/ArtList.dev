import { API_URL } from "@/utils/env";

export const serverFetch = async (
  path: string,
  revalidate: number = 60000,
  tags: string[] = [],
) => {
  const response = await fetch(API_URL + path, {
    next: {
      revalidate,
      tags,
    },
    credentials: "same-origin",
  });

  if (!response.ok) {
    throw new Error("Fetch error");
  }

  return await response.json();
};
