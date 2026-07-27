import {test, expect} from '@playwright/test';

test('Salesforce-Login Procedure', async ({browser}) => 
    {
        const newContext = await browser.newContext();

        const newPage = await newContext.newPage();

        const testURL = "https://login.salesforce.com/";

        const emailID = 'vmrockzz.2258@gmail.com';
        const password = "Testing@1234";

        await newPage.goto(testURL);

        //  Detect if the page opening is a login page.
        await expect(newPage.getByRole('heading', { name: 'Salesforce login' })).toBeVisible();
        
        await newPage.locator('#username').fill(emailID); // Using locators, find the emailID field using id attribute

        await newPage.locator('#password').fill(password); // Using locators, find the password field using id attribute

        await newPage.getByRole('button', { name: 'Log in' }).click(); // Click on submit button

        await newPage.waitForTimeout(10000); // 1 second = 1000 milliseconds

        let pageTitle = await newPage.title(); // Get current page's title
        let pageURL = newPage.url(); // Get current page's URL.

        console.log(`Page Title: ${pageTitle}\nPage URL: ${pageURL}`);

        browser.close();
    });