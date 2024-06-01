import { test } from './utils/fixtures';
import { Footer } from './models/Footer';
import { expect } from '@playwright/test';
import { StatutePage } from './models/StatutePage';
import { HomePage } from './models/HomePage';
import { rules } from '@/utils/data/rules';

test('statute', async ({ page }) => {
	const statutePage = new StatutePage(page);
	const footer = new Footer(page);
	const homePage = new HomePage(page);

	await homePage.goto();

	await footer.goToStatutePage();

	for (const rule of rules) {
		await expect(statutePage.getHeader(rule.header)).toBeVisible();
		await expect(statutePage.getRulesSection(rule.header)).toBeVisible();

		for (const paragraph of rule.paragraphs) {
			expect(statutePage.getParagraph(paragraph.toString())).toBeDefined();
		}
	}
});
