import { type Page } from '@playwright/test';

export class HomePage {
	constructor(private readonly page: Page) {}

	async goto() {
		await this.page.goto('/');
	}

	getServersFromTable() {
		return this.page
			.getByRole('table', { name: 'Lista serwerów Minecraft.' })
			.getByRole('row')
			.filter({
				hasNot: this.page.getByText('#', { exact: true }),
			})
			.filter({
				hasNot: this.page.getByText('Brak serwerów.', { exact: true }),
			});
	}
}
