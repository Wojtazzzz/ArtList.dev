import { expect } from '@playwright/test';
import { HomePage } from './models/HomePage';
import { Navigation } from './models/Navigation';
import { test } from './utils/fixtures';
import { Toast } from './models/Toast';

test('add server', async ({ page }) => {
	const homePage = new HomePage(page);
	const navigation = new Navigation(page);
	const toast = new Toast(page);

	await homePage.goto();

	// check list is empty
	await expect(homePage.getServersFromTable()).toHaveCount(0);

	// add new server
	await navigation.showAddServerModal();
	await navigation.fillServerAddress('art-test.pl');
	await navigation.submitAddServerForm();

	// check server added
	await expect(homePage.getServersFromTable()).toHaveCount(1);

	// check toast message
	await expect(
		toast.getSpecificToast(
			'Serwer został dodany',
			'Powinien znajdować się już na liście'
		)
	).toHaveCount(1);

	// check dialog closed
	await expect(navigation.getServerDialog()).toHaveCount(0);

	// add server with same name
	await navigation.showAddServerModal();
	expect(await navigation.getCurrentFilledServerAddress()).toEqual('');
	await navigation.fillServerAddress('art-test.pl');
	await navigation.submitAddServerForm();

	// check toast message
	await expect(
		toast.getSpecificToast('Wystąpił problem', 'Podany serwer już istnieje')
	).toHaveCount(1);

	// check dialog opened
	await expect(navigation.getServerDialog()).toHaveCount(1);

	// check input marked as invalid
	expect(await navigation.getServerAddressFieldInvalid()).toEqual('true');
});
