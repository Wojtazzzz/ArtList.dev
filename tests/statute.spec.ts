import { test } from "./utils/fixtures";
import { Footer } from "./models/Footer";
import { expect } from "@playwright/test";
import { StatutePage } from "./models/StatutePage";
import { HomePage } from "./models/HomePage";

test("statute", async ({ page }) => {
  const statutePage = new StatutePage(page);
  const footer = new Footer(page);
  const homePage = new HomePage(page);

  await homePage.goto();

  await footer.goToStatutePage();

  const rules = statutePage.getRules();

  await expect(rules).toHaveCount(8);

  for (const rule of await rules.all()) {
    await expect(rule).toBeVisible();
  }
});
