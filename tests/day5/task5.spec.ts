// 1.  Login to https://login.salesforce.com 
// 2. Click on the toggle menu button from the left corner 
// 3. Click View All and click Individuals from App Launcher 
// 4. Click on the Dropdown icon in the Individuals tab 
// 5. Click on New Individual 
// 6. Enter the Last Name 
// 7. Click save and verify Individuals Name 

import { test, expect} from '@playwright/test';

test('Assignment-3', async({ browser}) => 
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
        // await expect(page.locator('//*[@class="slds-button"]')).toBeVisible();
        // await page.locator('//*[@class="slds-button"]').click();
        const panelCont = await page.locator('//*[@class="panel-content scrollable"]');
        await panelCont.getByText("View All", ({ exact: true})).click();

        // Search through the list of items in App launcher, click on the item that has the name "Individuals"
        page.getByRole('dialog', { name: 'App Launcher'}).getByRole('link', { name: 'Individuals', exact: true}).click();

        // Make sure landing page is loaded
        await expect(page.locator('//*[@class="slds-var-p-right_x-small"]')).toHaveText("Individuals");

        // Click on New Individual
        await page.getByRole('button', { name: 'New'}).click();

        const lastName = "Jackson";

        // Enter last name
        await expect(page.locator('//*[@class="full forcePageBlock forceRecordLayout"]')).toBeVisible();

        await page.locator('//*[@class="full forcePageBlock forceRecordLayout"]').getByPlaceholder('Last Name').fill(lastName);

        // Click save and verify Individual's name
        await page.getByRole('button', { name: "Save", exact: true }).click();

        await expect(page.locator('//*[@class="uiOutputText"]')).toHaveText(lastName);

        browser.close();
    });