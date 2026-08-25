//Tasks to perform:
// 1. Navigate to the Salesforce login page.
// 2. Use different CSS selector strategies (ID, Class, and Attribute) to locate the username 
// and password fields.
// 3. Use XPath selectors (Absolute, Relative, and Attribute-based) to also locate the username 
// and password fields.
// 4. Enter the sample credentials into the username and password fields.
// 5. Click the login button using both CSS and XPath selectors.
// 6. Verify that the login was successful by checking for a specific element on the landing page.

import { test, expect } from '@playwright/test';

test('Testing with selectors', async ({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = process.env.SF_URL!;
        const username = process.env.SF_USERNAME!;
        const password = process.env.SF_PASSWORD!;

        await page.goto(testURL);

        // Detect if the page opening is a login page.
        await expect(page.getByRole('heading', { name: 'Salesforce Login' })).toBeVisible();
        
        // Using CSS Selectors for locating username and password fields
        await page.locator('#username').fill(username); 
        await page.locator('#password').fill(password);

        // Using XPath Selectors for locating username and password fields
        await page.locator('//*[@id="username"]').fill(username);// XPath: //*[@id="username"]
        await page.locator('//*[@id="password"]').fill(password);// XPath: //*[@id="password"]

        // Click the login button using CSS Selector
        await page.locator('#Login'); // #Login
        
        // Click the login button using XPath Selector
        await page.locator('//*[@id="Login"]').click();

        // Checking for a specific element on the landing page to verify successful login.
        await expect(page).toHaveTitle('Home | Salesforce');

        browser.close();
    });