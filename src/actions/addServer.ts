import { API_URL } from "@/utils/env";

type AddServerState =
  | {
      status: "idle";
    }
  | {
      status: "ok";
    }
  | {
      status: "error";
      error: string;
    };

export const initialState: AddServerState = {
  status: "idle",
};

export async function addServer(prevState: any, formData: FormData) {
  const response = await fetch(`${API_URL}/servers/add`, {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return {
      status: "error",
      error:
        "Dodawanie serwera się nie powiodło. Proszę spróbować ponownie później.",
    };
  }

  return {
    status: "ok",
  };
}
