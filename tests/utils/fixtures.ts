import { test as base } from "@playwright/test";
import { clearDatabase } from "./clearDatabase";
import { clearNextCache } from "./clearNextCache";

export const test = base.extend({
  page: async ({ page }, use) => {
    await clearDatabase();
    await clearNextCache();

    await use(page);
  },
});
