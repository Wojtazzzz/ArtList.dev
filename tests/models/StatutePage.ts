import { type Page } from "@playwright/test";

export class StatutePage {
  constructor(private readonly page: Page) {}

  getHeader(content: string) {
    return this.page.getByRole("heading", {
      name: content,
      level: 2,
    });
  }

  getParagraph(content: string) {
    return this.page.getByRole("listitem").getByRole("paragraph", {
      name: content,
    });
  }

  getRulesSection(label: string) {
    return this.page.getByRole("list", {
      name: label,
    });
  }
}
