// 1. Launch the browser 
// 2. Enter the username 
// 3. Enter the password 
// 4. Click Login 
// 5. Click CRM/SFA link 
// 6. Click Leads link 
// 7. Click on Create Lead 
// 8. Enter company name 
// 9. Enter first name 
// 10.Enter last name 
// 11.Click on Create Lead button   
// 12.Click Edit 
// 13.Change the company name 
// 14.Click Update

import { test, expect } from '@playwright/test';

test('Assignment 2', async ({ browser  }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "http://leaftaps.com/opentaps/control/main";
        const username = "democsr";
        const password = "crmsfa";

        await page.goto(testURL);

        // Enter username and password:
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);

        // Click Login button
        await page.locator('//*[@class="decorativeSubmit"]').click();

        // Click CRM/SFA Link:
        await expect(page.getByRole('heading', { name: 'Welcome', exact: false })).toBeVisible();
        await page.locator('//*[@id="button"]').click();

        // Checking if landing page is home page (For safecheck)
        await expect(page.locator('//*[@id="sectionHeaderTitle_myHome"]')).toBeVisible();

        //Click Leads link
        await page.getByRole('link', { name: 'Leads'}).click();

        //Click on create lead
        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toHaveText("My Leads");
        await page.getByRole('link', { name: 'Create Lead' }).click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toHaveText("Create Lead");

        const companyName = "MJ Inc.";
        const firstName = "Michael";
        const lastName = "Jackson";
        const changedCompanyName = "MJ Pvt Ltd.";

        // Enter details:
        await page.locator('//*[@id="createLeadForm_companyName"]').fill(companyName);
        await page.locator('//*[@id="createLeadForm_firstName"]').fill(firstName);
        await page.locator('//*[@id="createLeadForm_lastName"]').fill(lastName);
        
        // Click on create lead button
        await page.locator('//*[@class="smallSubmit"]').click();

        // Click on edit button once page is loaded
        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toHaveText("View Lead");
        await page.getByRole('link', { name: 'Edit'}).click();

        // Make sure landing page is Edit leads, change company name and click on update button
        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toHaveText("Edit Lead");
        await page.locator('//*[@id="updateLeadForm_companyName"]').fill(changedCompanyName);
        await page.getByRole('button', { name: "Update"}).click();

        await page.waitForTimeout(5000);

        browser.close();
    });