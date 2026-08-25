// Assignment 1:
// 1. Login to https://login.salesforce.com 
// 2. Click on toggle menu button from the left corner 
// 3. Click view All and click Sales from App Launcher 
// 4. Click on Leads tab  
// 5. Click on New button 
// 6. Select Salutation dropdown 
// 7. Enter the Last Name 
// 8. Enter the Company Name 
// 9. Click Save and Verify Leads name created

import { test, expect } from '@playwright/test';

test('Assignment 1', async ({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = process.env.SF_URL!;
        const username = process.env.SF_USERNAME!;
        const password = process.env.SF_PASSWORD!;

        await page.goto(testURL);

        await expect(page.getByRole('heading', { name: 'Salesforce Login' })).toBeVisible();

        await page.locator('#username').fill(username); // using locators, identify username, password fields and login button
        await page.locator('#password').fill(password);

        await page.locator('//*[@id="Login"]').click();

        await expect(page).toHaveTitle('Home | Salesforce'); // Wait until landing page is the home page.
        
        // Identify and click the toggle button using XPath selector.
        await expect(page.locator('//*[@class="slds-icon-waffle"]')).toBeVisible();;
        await page.locator('//*[@class="slds-icon-waffle"]').click();

        // Identify and click the "View All" button using getByRole().
        await expect(page.locator('//*[@class="slds-button"]')).toBeVisible();
        await page.locator('//*[@class="slds-button"]').click();
        
        // Search through the list of items in App launcher, click on the item that has the name "Sales"
        const salesApp = page.getByRole('dialog', { name: 'App Launcher' }).getByRole('link', { name: 'Sales', exact: true });  

        await expect(salesApp).toBeVisible();
        await salesApp.click();

        // Identify and click the Leads tab using getByTitle():
        await page.getByRole('link', { name: 'Leads' }).click();

        // Click on New button using getByRole()
        await page.getByRole('button', { name: 'New' }).click();

        // Print all available options in the Salutation dropdown
        const salutationDropdown = page.getByRole('combobox', { name: 'Salutation' });
        await expect(salutationDropdown).toBeVisible();

        await salutationDropdown.click();

        const optionObjects = await page.getByRole('option');

        const optionsList = await optionObjects.allInnerTexts();

        console.log(`Available Options: ${optionsList}`);

        const salutation = "Mr.";
        const firstName = "Michael";
        const lastName = "Jackson";
        const companyName = "MJ Inc.";

        // Select "Mr." from the Salutation dropdown
        await page.getByRole('option', { name: salutation }).click();

        // Enter Last name and company name:
        await page.getByPlaceholder('First Name').fill(firstName);
        await page.getByPlaceholder('Last Name').fill(lastName);
        await page.getByRole('textbox', { name: 'Company' }).fill(companyName);

        // Click save button
        await page.getByRole('button', { name: 'Save', exact: true }).click();

        // Verify if the Lead has been saved properly
        await expect(page.locator('lightning-formatted-name')).toContainText(`${salutation} ${ firstName} ${lastName}`);

        await page.waitForTimeout(5000);

        browser.close();
    });