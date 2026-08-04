//Precondition:
// - Launch Chromium in non-headless mode
// - Create a new browser context.
// - Open a new page within the browser context.
// - Load the url https://login.salesforce.com/
// - Use your Salesforce credentials that you’ve created

//Requirements:
// - Enter the username.
// - Enter the password.
// - Click the Login button.
// - Wait for 10 seconds
// - Print the page title and the current url of the page
// - Close the browser


import {test, expect} from '@playwright/test';

test('Salesforce-Login', async ({browser}) => 
    {
        const newContext = await browser.newContext();

        const newPage = await newContext.newPage();

        const testURL = "https://login.salesforce.com/";

        const emailID = "dilipkumar.rajendran@testleaf.com";
        const password = "TestLeaf@2025";

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