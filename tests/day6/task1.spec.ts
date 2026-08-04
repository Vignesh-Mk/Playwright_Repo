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
// 17. Verify the company name, first name, last name and the status using auto retrying and non-retrying assertions

import { test, expect} from '@playwright/test';

test('Assignment 1 (Locators & Assertions)', async ({ browser}) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "http://leaftaps.com/opentaps/control/main";
        const username = "Demosalesmanager"; // Was not working when testing, so using
        const username_backup = "democsr";
        const password = "crmsfa";

        // New Data:
        const companyName = "JB Inc.";
        const firstName = "James";
        const lastName = "Bond";
        const salutation = "Mr.";
        const title = "Managing Director";
        const annualRevenue = "50000000";
        const dept = "Operations & Executions";
        const countryCode = "+91";
        const phNo = "9876543210"

        // 1. Navigate to the url
        await page.goto(testURL);

        await expect(page.getByRole('heading', { name: "Leaftaps Login"})).toBeVisible();

        // 2. Enter the username
        // 3. Enter the password
        // 4. Click the Login button
        await page.locator('#username').fill(username_backup);
        await page.locator('#password').fill(password);
        await page.locator('//*[@class="decorativeSubmit"]').click();

        await expect(page.getByRole('heading', { name: "Welcome\nDemo B2B CSR"})).toBeVisible();

        // 5. Click CRM/SFA
        await page.locator('//*[@class="crmsfa"]').click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_myHome"]')).toBeVisible();

        // 6. Click Leads
        await page.getByRole('link', { name: "Leads"}).click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toBeVisible();

        // 7. Click Create Lead
        await page.getByRole('link', { name: "Create Lead"}).click();

        await expect(page.locator('//*[@id="sectionHeaderTitle_leads"]')).toHaveText("Create Lead");
        // 8. Fill the Company Name
        await page.locator('#createLeadForm_companyName').fill(companyName);

        // 9. Fill the First Name
        await page.locator("#createLeadForm_firstName").fill(firstName);

        // 10. Fill the Last Name
        await page.locator("#createLeadForm_lastName").fill(lastName);

        // 11. Fill the Salutation
        await page.locator("#createLeadForm_personalTitle").fill(salutation);

        // 12. Fill the Title
        await page.locator("#createLeadForm_generalProfTitle").fill(title);

        // 13. Fill the Annual Revenue
        await page.locator("#createLeadForm_annualRevenue").fill(annualRevenue);

        // 14. Fill the Department
        await page.locator("#createLeadForm_departmentName").fill(dept);

        // 15. Fill the Phone number
        await page.locator("#createLeadForm_primaryPhoneCountryCode").fill(countryCode);
        await page.locator("#createLeadForm_primaryPhoneNumber").fill(phNo);

        // 16. Click Create Lead button
        //await page.getByRole('button', { name: "submitButton"}).click();
        await page.locator('//*[@class="smallSubmit"]').click();
        await expect(page.locator('#sectionHeaderTitle_leads')).toHaveText("View Lead");

        // 17. Verify the company name, first name, last name and the status using auto retrying assertions
        await expect(page.locator('#viewLead_companyName_sp')).toContainText(companyName);
        await expect(page.locator('#viewLead_firstName_sp')).toHaveText(firstName);
        await expect(page.locator('#viewLead_lastName_sp')).toHaveText(lastName);
        await expect(page.locator('#viewLead_statusId_sp')).toHaveText("Assigned");

        // 17. Verify the company name, first name, last name and the status using non-retrying assertions
        const displayedCompanyName = await page.locator('#viewLead_companyName_sp').textContent();
        const displayedFirstName = await page.locator('#viewLead_firstName_sp').textContent();
        const displayedLastName = await page.locator('#viewLead_lastName_sp').textContent();
        const displayedStatus = await page.locator('#viewLead_statusId_sp').textContent();

        expect(displayedCompanyName).toContain(companyName);
        expect(displayedFirstName).toBe(firstName);
        expect(displayedLastName).toBe(lastName);
        expect(displayedStatus).toBe("Assigned");
        
        await page.waitForTimeout(3000);

        await browser.close();
    });