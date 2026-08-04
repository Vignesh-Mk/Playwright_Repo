// Test Steps: 
// 1. Login to https://login.salesforce.com 
// 2. Click on the toggle menu button from the left corner 
// 3. Click View All and click Individuals from App Launcher  
// 4. Click on the Individuals tab  
// 5. Search the Individuals last name 
// 6. Click on the Dropdown icon and Select Edit 
// 7. Select Salutation as 'Mr' 
// 8. Now enter the first name 
// 9. Click on Save and Verify the first name

import { test, expect} from '@playwright/test';

test('Assignment-4', async({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = 'https://login.salesforce.com';
        const username = "dilipkumar.rajendran@testleaf.com";
        const password = "TestLeaf@2025";
        const lastName = "Jameson";
        const salutation = "Mr."

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
        // await expect(page.locator('//*[@class="slds-button"]')).toBeVisible();
        // await page.locator('//*[@class="slds-button"]').click();
        const panelCont = await page.locator('//*[@class="panel-content scrollable"]');
        await panelCont.getByText("View All", ({ exact: true})).click();

        // Search through the list of items in App launcher, click on the item that has the name "Individuals"
        page.getByRole('dialog', { name: 'App Launcher'}).getByRole('link', { name: 'Individuals', exact: true}).click();

        // Make sure landing page is loaded
        await expect(page.locator('//*[@class="slds-var-p-right_x-small"]')).toHaveText("Individuals");

        // Search for the required individual using last name.
        await page.getByPlaceholder('search this list...').fill(lastName);
        await page.getByPlaceholder('search this list...').press("Enter");

        await page.waitForTimeout(3000);

        // Click on dropdown button and select "Edit"
        const foundRow = page.locator('tr').filter({hasText: lastName});
        const dropKey = foundRow.locator('//*[@class="slds-button slds-button_icon-border slds-button_icon-x-small"]');
        await dropKey.click();

        await expect(page.locator('//*[@class="highlightButton"]').filter({ hasText: "Edit"})).toBeVisible();
        await page.locator('//*[@class="highlightButton"]').filter({ hasText: "Edit"}).click();

        //Update Salutation and first name
        await expect(page.getByTitle(`Edit ${lastName}`)).toBeVisible();

        await page.getByTitle('Salutation').locator('//*[@class="select"]').click();

        await page.waitForTimeout(3000);

        browser.close();
    });