// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
// 2. Enter the username as ‘Demosalesmanager’
// 3. Enter the password as ‘crmsfa’
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Create Lead
// 8. Fill the Company Name
// 9. Fill the First Name
// 10. Fill the Last Name
// 11. Fill the Salutation
// 12. Fill the Title
// 13. Fill the Annual Revenue
// 14. Fill the Department
// 15. Fill the Phone number
// 16. Click Create Lead button
// 17. Verify the company name, first name, last name and the status
// 18. Get the page title

import { test, expect} from '@playwright/test';

test('Assignment: 1 Create a Lead', async ({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "http://leaftaps.com/opentaps/control/main";
        const username = "Demosalesmanager";
        const username_backup = "democsr";
        const password = "crmsfa";

        // 1. Navigate to the url http://leaftaps.com/opentaps/control/main
        page.goto(testURL);

        await expect(page.getByRole('heading', ({ name: "Leaftaps Login"})));

        // 2. Enter the username as ‘Demosalesmanager’
        // 3. Enter the password as ‘crmsfa’
        // 4. Click the Login button
        await page.locator('#username').fill(username_backup);
        await page.locator('#password').fill(password);
        await page.locator('//*[@class="decorativeSubmit"]').click();

        // 5. Click CRM/SFA
        await expect(page.getByRole('heading', { name: 'Welcome', exact: false })).toBeVisible();
        await page.locator('//*[@id="button"]').click();

        // 6. Click Leads

        await page.waitForTimeout(5000);

        browser.close();
    });