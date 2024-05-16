"use server";

import { addServer as addServerService } from "@/services/addServer";
import { revalidatePath } from "next/cache";

export type AddServerPayload = {
  name: string;
};

export const addServer = async ({ name }: AddServerPayload) => {
  if (name.length <= 0) {
    return {
      error: "Podano nieprawidłową nazwę serwera",
    };
  }

  const response = await addServerService({
    name,
  });

  if (!response.success) {
    return {
      error: response.error,
    };
  }

  revalidatePath("/");

  return {};
};
