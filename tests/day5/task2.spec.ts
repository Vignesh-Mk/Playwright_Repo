// Preconditions:
// 1. Use Playwright to launch Edge and Firefox.
// 2. Create two separate browser instances.
// 3. Use the following URLs:
//       Red Bus: https://www.redbus.in
//       Flipkart: https://www.flipkart.com

// Requirements:
// Red Bus (Edge):
//  -> Load the home page and print the page title and current URL.
// Flipkart (Firefox):
//  -> Load the home page and print the page title and current URL.

import { test, expect } from '@playwright/test';

test('Parallel Testing with browsers', async ({ browser, baseURL }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto(baseURL!); // baseURL is set for both the browsers in playwright.config.ts

        // Wait until the page title is available
        let pageTitle = await page.title();
        let pageURL = page.url();

        console.log(`Page Title: ${pageTitle}\nPage URL: ${pageURL}`);

        browser.close();
    });