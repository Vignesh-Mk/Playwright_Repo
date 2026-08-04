// 1. Navigate to the url https://login.salesforce.com/ 
// 2. Enter username using getByLabel 
// 3. Enter password using getByLabel 
// 4. Click Login 
// 5. Verify the title and url of the page using appropriate assertions 
// 6. Click App Launcher using the class locator 
// 7. Click View All using getByText 
// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
// 9. Click Service using index based XPath 
// 10. Click Accounts using attribute based CSS selector 
// 11. Click New using getByRole 
// 12. Enter Account name using attribute based CSS selector 
// 13. Click Save button using XPath 
// 14. Verify the toast message displayed

import { test, expect} from '@playwright/test';

test('Assignment 3 (Locators & Assertions)', async ({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = 'https://login.salesforce.com';
        const username = "dilipkumar.rajendran@testleaf.com";
        const password = "TestLeaf@2025";

        // 1. Navigate to the url https://login.salesforce.com/ 
        await page.goto(testURL);

        await expect(page.getByRole('heading', { name: 'Salesforce Login' })).toBeVisible();

        // 2. Enter username using getByLabel 
        // 3. Enter password using getByLabel
        await page.getByLabel('Username').fill(username);
        await page.getByLabel('Password').fill(password);

        // 4. Click Login
        await page.locator('//*[@id="Login"]').click();

        // 5. Verify the title and url of the page using appropriate assertions 
        await expect(page).toHaveTitle('Home | Salesforce');
        await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home');

        // 6. Click App Launcher using the class locator
        await expect(page.locator('//*[@class="slds-icon-waffle"]')).toBeVisible();;
        await page.locator('//*[@class="slds-icon-waffle"]').click();

        // 7. Click View All using getByText
        await expect(page.locator('one-app-launcher-menu').getByText("View All", { exact: true})).toBeVisible();
        await page.locator('one-app-launcher-menu').getByText("View All", { exact: true}).click();

        // 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
        await expect(page.getByRole('dialog', { name: "App Launcher"}).getByPlaceholder('Search apps or items...')).toBeVisible();

        await page.getByRole('dialog', { name: "App Launcher"}).getByPlaceholder('Search apps or items...').fill('Service');

        // 9. Click Service using index based XPath 
        await expect(page.getByRole('dialog', { name: "App Launcher"}).locator('(p[text()="Service"])[1]')).toBeVisible();

        await page.getByRole('dialog', { name: "App Launcher"}).locator('(p[text()="Service"])[1]');

        await page.waitForTimeout(4000);

        await browser.close();
    });