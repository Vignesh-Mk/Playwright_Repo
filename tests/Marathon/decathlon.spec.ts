// 1. Launch the browser and navigate to https://www.decathlon.in/ 
// 2. Verify the Decathlon homepage is displayed 
// 3. Click on the Search box 
// 4. Enter the product name “Shoes” 
// 5. Press Enter or select a suggestion from the dropdown 
// 6. Verify the product listing page is displayed 
// 7. Click on the Sport filter dropdown 
// 8. Select Running from the Sport dropdown 
// 9. Click on the Gender filter dropdown 
// 10. Select Men 
// 11. Click on the Size filter dropdown 
// 12. Select size UK 10 
// 13. Click on the Sort By dropdown and choose 'Highest Discount' 
// 14. Select a price range ( 1000 – 3000) 
// 15. From the filtered results, click on the first available product 
// 16. On the product details page, select Size – UK 10 
// 17. Click on the Add to Cart button 
// 18. Verify that the product is successfully added to the cart

import { test, expect } from '@playwright/test';

test('Decathlon: Add to cart', async ({ browser}) => 
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "https://www.decathlon.in/";

        // 1. Launch the browser and navigate to https://www.decathlon.in/
        await page.goto(testURL);

        // 2. Verify the Decathlon homepage is displayed
        await expect(page).toHaveURL(testURL);

        await page.waitForTimeout(2000);

        // 3. Click on the Search box
        //const searchBox = page.getByPlaceholder('Search for 60+ sports and 6,000+ products');
        const searchBoxCont = page.getByRole('search');
        await expect(searchBoxCont).toBeVisible();
        await searchBoxCont.click();

        // 4. Enter the product name “Shoes”
        const searchBox = page.getByPlaceholder('Search for 60+ sports and 6,000+ products');
        await expect(searchBox).toBeVisible();
        await searchBox.fill('Shoes');

        // 5. Press Enter or select a suggestion from the dropdown
        await searchBox.press('Enter');

        // 6. Verify the product listing page is displayed
        await expect(page).toHaveURL(/.*search|.*shoes/i);

        // 7. Click on the Sport filter dropdown
        await page.getByText('Sport', { exact: true }).click();

        // 8. Select Running from the Sport dropdown 
        const selectSport = page.locator('//*[@class="sport_pratice_en"]').getByText('Running');
        await selectSport.click();

        await page.waitForTimeout(3000);

        await browser.close();
    });