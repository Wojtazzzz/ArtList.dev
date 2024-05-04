import { Locator, Page } from "@playwright/test";

export class Navigation {
  private readonly showDialogButton: Locator;
  private readonly serverAddressInput: Locator;
  private readonly addServerButton: Locator;
  private readonly addServerDialog: Locator;

  constructor(page: Page) {
    this.showDialogButton = page.getByRole("button", { name: "Dodaj serwer" });
    this.serverAddressInput = page.getByLabel("Nazwa", { exact: true });
    this.addServerButton = page.getByRole("button", { name: "Dodaj" });
    this.addServerDialog = page.getByRole("dialog", { name: "Dodaj serwer" });
  }

  async showAddServerModal() {
    await this.showDialogButton.click();
  }

  getServerDialog() {
    return this.addServerDialog;
  }

  async fillServerAddress(address: string) {
    await this.serverAddressInput.fill(address);
  }

  async getCurrentFilledServerAddress() {
    return await this.serverAddressInput.inputValue();
  }

  async submitAddServerForm() {
    await this.addServerButton.click();
  }

  async getServerAddressFieldInvalid() {
    return await this.serverAddressInput.getAttribute("aria-invalid");
  }
}
