import { z } from "zod";

export const parseData = <T extends z.ZodTypeAny>(data: unknown, schema: T) => {
  console.log(schema);
  // return schema.parse(data) as z.infer<T>;
  return data as z.infer<T>;
};
