// 1. Launch the JavaScript Alerts page using Playwright.
// 2. Click "Click for JS Alert" and handle the alert dialog.
// 3. Verify the alert message before accepting it.
// 4. Click "Click for JS Confirm", verify the dialog message, and accept the dialog.
// 5. Repeat the Confirm scenario and dismiss the dialog.
// 6. Click "Click for JS Prompt", verify the prompt message, and enter a sample text.
// 7. Accept the prompt and verify the result displayed on the page.
// 8. Add appropriate assertions for each scenario.

import { test, expect} from '@playwright/test';

test('JS Alerts, Confirm and Prompts', async({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "https://the-internet.herokuapp.com/javascript_alerts";

        // 1. Launch the JavaScript Alerts page using Playwright.
        await page.goto(testURL);

        // 2. Click "Click for JS Alert" and handle the alert dialog.
        // 3. Verify the alert message before accepting it.
        // Setting up listeners for JS alerts
        page.once('dialog', async (dialog) => 
            {
                expect(dialog.type()).toBe('alert');  //checking if the message is alert type
                expect(dialog.message()).toBe('I am a JS Alert'); // Checking if the Text message matches.
                await dialog.accept();
            });

        await expect(page.getByRole('button', { name: 'Click for JS Alert'})).toBeVisible();
        await page.getByRole('button', { name: 'Click for JS Alert'}).click();

        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

        // 4. Click "Click for JS Confirm", verify the dialog message, and accept the dialog.
        page.once('dialog', async(dialog) => 
            {
                expect(dialog.type()).toBe('confirm');
                expect(dialog.message()).toBe('I am a JS Confirm');
                await dialog.accept();
            });

        await page.getByRole('button', { name: 'Click for JS Confirm'}).click();

        await expect(page.locator('#result')).toHaveText('You clicked: Ok');

        // 5. Repeat the Confirm scenario and dismiss the dialog.
        page.once('dialog', async(dialog) => 
            {
                expect(dialog.type()).toBe('confirm');
                expect(dialog.message()).toBe('I am a JS Confirm');
                await dialog.dismiss();
            });

        await page.getByRole('button', { name: 'Click for JS Confirm'}).click();

        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

        // 6. Click "Click for JS Prompt", verify the prompt message, and enter a sample text.
        // 7. Accept the prompt and verify the result displayed on the page.

        const sampleText = 'Hello World!';
        page.once('dialog', async(dialog) => 
            {
                expect(dialog.type()).toBe('prompt');
                expect(dialog.message()).toBe('I am a JS prompt');
                await dialog.accept(sampleText);
            });

        await page.getByRole('button', { name: 'Click for JS Prompt'}).click();

        await expect(page.locator('#result')).toHaveText(`You entered: ${sampleText}`);

        await page.waitForTimeout(3000);

        await browser.close();

    });