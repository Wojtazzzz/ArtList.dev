import { type Page } from "@playwright/test";

export class StatutePage {
  constructor(private readonly page: Page) {}

  getRulesList() {
    return this.page.getByRole("list", {
      name: "Regulamin serwisu",
    });
  }

  getRules() {
    return this.getRulesList().getByRole("listitem");
  }
}
