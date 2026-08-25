// 1. Navigate to the url http://leaftaps.com/opentaps/control/main 
// 2. Enter the username as ‘Demosalesmanager’ 
// 3. Enter the password as ‘crmsfa’ 
// 4. Click the Login button 
// 5. Click CRM/SFA 
// 6. Click Leads 
// 7. Click Find Leads 
// 8. Enter the first name 
// 9. Click Find Leads button 
// 10. Click the first resulting Lead ID 
// 11. Click Edit 
// 12. Edit Company name 
// 13. Edit Annual Revenue 
// 14. Edit Department 
// 15. Enter Description 
// 16. Click Update 
// 17. Verify the edited fields using appropriate assertions

import { test, expect} from '@playwright/test';

test('Assignment 2 (Locators & Assertions)', async ({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = process.env.LT_URL!;
        const username = process.env.LT_USERNAME!;
        const password = process.env.LT_PASSWORD!;

        // Find Leads - data
        const firstName = "James";

        // Modified Values
        const modifiedCompanyName = "JB Security Solutions";
        const modifiedAnnualIncome = "100000000";
        const modifiedDept = "Operations and Executions (Lead)";
        const description = "For testing purposes only";

        // 1. Navigate to the url http://leaftaps.com/opentaps/control/main
        await page.goto(testURL);

        // 2. Enter the username as ‘Demosalesmanager’ 
        // 3. Enter the password as ‘crmsfa’ 
        // 4. Click the Login button
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);

        await page.locator('//*[@class="decorativeSubmit"]').click();

        await expect(page.getByRole('heading', { name: "Welcome\nDemo B2B CSR"})).toBeVisible();

        // 5. Click CRM/SFA
        await page.locator('//*[@class="crmsfa"]').click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_myHome"]')).toBeVisible();

        // 6. Click Leads
        await page.getByRole('link', { name: "Leads" }).click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toBeVisible();

        // 7. Click Find Leads
        await page.getByRole('link', { name: "Find Leads" }).click();

        await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText("Find Leads");

        // 8. Enter the first name
        await page.getByRole('textbox', { name: "First name: "}).fill(firstName);

        // 9. Click Find Leads button
        await page.getByRole('button', { name: "Find Leads"}).click();

        await page.waitForTimeout(3500);

        await expect(page.locator('.x-grid3-cell-inner a').first()).toBeVisible();
        
        // 10. Click the first resulting Lead ID
        const foundRow = page.locator('.x-grid3-cell-inner a').first();

        await foundRow.click();

        await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText("View Lead");

        // 11. Click Edit
        await page.getByRole('link', { name: "Edit"}).click();

        await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText("Edit Lead");

        // 12. Edit Company name
        await page.locator('#updateLeadForm_companyName').fill(modifiedCompanyName);

        // 13. Edit Annual Revenue 
        await page.locator('#updateLeadForm_annualRevenue').fill(modifiedAnnualIncome);

        // 14. Edit Department 
        await page.locator('#updateLeadForm_departmentName').fill(modifiedDept);

        // 15. Enter Description
        await page.locator('#updateLeadForm_description').fill(description);

        // 16. Click Update
        await page.getByRole('button', { name: "Update"}).click();

        await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText("View Lead");

        // 17. Verify the edited fields using appropriate assertions
        // Using Auto-Retrying Assertions:
        await expect(page.locator('#viewLead_companyName_sp')).toContainText(modifiedCompanyName);
        await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText("100,000,000.00");
        await expect(page.locator('#viewLead_departmentName_sp')).toHaveText(modifiedDept);
        await expect(page.locator('#viewLead_description_sp')).toHaveText(description);

        await browser.close();
    });