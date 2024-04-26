const parseEnv = (value: unknown, name: string) => {
  if (!value || typeof value !== "string") {
    throw new Error(`Missing env variable called "${name}"`);
  }

  if (!value || typeof value !== "string") {
    throw new Error(`Unknown value of env variable called "${name}"`);
  }

  return String(value);
};

export const API_URL = parseEnv(
  process.env.NEXT_PUBLIC_API_URL,
  "NEXT_PUBLIC_API_URL",
);

export const APP_URL = parseEnv(
  process.env.NEXT_PUBLIC_APP_URL,
  "NEXT_PUBLIC_APP_URL",
);
