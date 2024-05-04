import { Locator, Page } from "@playwright/test";

export class Toast {
  private readonly toastsContainer: Locator;

  constructor(private readonly page: Page) {
    this.toastsContainer = page.getByRole("region", {
      name: "Notifications (F8)",
    });
  }

  getSpecificToast(title: string, description: string) {
    return this.toastsContainer
      .getByRole("status")
      .filter({
        hasText: title,
      })
      .filter({
        hasText: description,
      });
  }
}
