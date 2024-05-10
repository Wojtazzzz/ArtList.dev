import { API_URL } from "@/utils/env";

export const clearNextCache = async () => {
  await fetch(`${API_URL}/cache`);
};
