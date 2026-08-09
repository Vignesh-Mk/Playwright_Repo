// Precondition:
// - Launch the browser
// - Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)
// - Switch to the frame
// - Ensure the webpage elements are fully loaded (Playwright auto-waits)

// Requirements:
// 1. Click the "Try It" button inside the frame
// 2. Click OK / Cancel in the alert that appears
// 3. Verify the action is performed correctly by validating the displayed text

import { test, expect} from '@playwright/test';

test('Handling Browser alerts', async({ browser }) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm";

        // - Launch the browser
        // - Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)
        await page.goto(testURL);

        // - Switch to the frame
        const resultFrame = page.frameLocator('#iframeResult');

        page.once('dialog', async(dialog) =>
            {
                expect(dialog.message()).toBe("Press a button!");

                await dialog.accept();
            });

        // 1. Click the "Try It" button inside the frame
        await resultFrame.getByRole('button', { name: 'Try it', exact: true}).click();

        // 3. Verify the action is performed correctly by validating the displayed text
        await expect(resultFrame.locator('#demo')).toHaveText('You pressed OK!');

        await page.waitForTimeout(2000);

        await browser.close();
    });