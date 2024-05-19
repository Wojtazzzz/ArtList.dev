import { z } from "zod";

type GetServerDataResponse =
  | {
      success: false;
      message: string;
    }
  | {
      success: true;
      data: ServerResponseData;
    };

export const fetchExternalServerData = async (
  serverName: string,
): Promise<GetServerDataResponse> => {
  const response = await fetch(`https://api.mcsrvstat.us/3/${serverName}`);

  if (!response.ok) {
    return {
      success: false,
      message: "Nie udało się pobrać danych serwera",
    };
  }

  const result = await serverResponseSchema.safeParseAsync(
    await response.json(),
  );

  // console.log(result.error);

  if (!result.success) {
    return {
      success: false,
      message: "Serwer zwrócił nieprawidłowe dane",
    };
  }

  return {
    success: true,
    data: result.data,
  };
};

export const serverResponseSchema = z.union([
  z.object({
    ip: z.string(),
    port: z.number(),
    debug: z.object({
      ping: z.boolean(),
      query: z.boolean(),
      srv: z.boolean(),
      querymismatch: z.boolean(),
      ipinsrv: z.boolean(),
      cnameinsrv: z.boolean(),
      animatedmotd: z.boolean(),
      cachehit: z.boolean(),
      cachetime: z.number(),
      cacheexpire: z.number(),
      apiversion: z.number(),
      dns: z.object({}),
      error: z.object({}).nullish(),
    }),
    motd: z.object({
      raw: z.array(z.string()),
      clean: z.array(z.string()),
      html: z.array(z.string()),
    }),
    players: z.object({
      online: z.number(),
      max: z.number(),
      list: z
        .array(
          z.object({
            name: z.string(),
            uuid: z.string(),
          }),
        )
        .nullish(),
    }),
    version: z.string(),
    online: z.literal(true),
    protocol: z.object({
      version: z.number(),
      name: z.string().nullish(),
    }),
    hostname: z.string(),
    icon: z.string().nullish(),
    info: z
      .object({
        raw: z.array(z.string()),
        clean: z.array(z.string()),
        html: z.array(z.string()),
      })
      .nullish(),
    software: z.string().nullish(),
    eula_blocked: z.boolean(),
  }),
  z.object({
    ip: z.string(),
    port: z.number(),
    debug: z.object({
      ping: z.boolean(),
      query: z.boolean(),
      srv: z.boolean(),
      querymismatch: z.boolean(),
      ipinsrv: z.boolean(),
      cnameinsrv: z.boolean(),
      animatedmotd: z.boolean(),
      cachehit: z.boolean(),
      cachetime: z.number(),
      cacheexpire: z.number(),
      apiversion: z.number(),
      dns: z.object({}),
      error: z.object({}).nullish(),
    }),
    online: z.literal(false),
    hostname: z.string(),
  }),
]);

export type ServerResponseData = z.infer<typeof serverResponseSchema>;
