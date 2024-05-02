import { z } from "zod";

export const parseData = <T extends z.ZodTypeAny>(data: unknown, schema: T) => {
  return schema.parse(data) as z.infer<T>;
};
