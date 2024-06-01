import type { Locator, Page } from '@playwright/test';

export class Footer {
	// private readonly homePageLink: Locator;
	private readonly statutePageLink: Locator;

	// private readonly shadcnPageLink: Locator;

	constructor(page: Page) {
		// this.homePageLink = page.getByRole("link", { name: "Strona główna" });
		this.statutePageLink = page.getByRole('link', {
			name: 'Regulamin serwisu',
		});
		// this.shadcnPageLink = page.getByRole("link", { name: "Shadcn (ui)" });
	}

	async goToStatutePage() {
		await this.statutePageLink.click();
	}
}
