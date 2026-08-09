// 1. Launch the browser and open https://www.pvrcinemas.com/ 
// 2. Select any available movie 
// 3. Select the date 
// 4. Select the cinema 
// 5. Select the show timing 
// 6. Click on the Book button 
// 7. Click on Accept for the Terms & Conditions 
// 8. Select two available seats 
// 9. Click on the Proceed button 
// 10. Verify and note the “To be Paid” amount displayed on the screen

import { test, expect } from '@playwright/test';

test('PVR Cinemas Booking flow', async({ browser }) =>
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        const testURL = "https://www.pvrcinemas.com/";

        // 1. Launch the browser and open https://www.pvrcinemas.com/ 
        await page.goto(testURL);

        await expect(page).toHaveTitle('PVR Cinemas');

        // Resolving location issue:
        await page.locator('//*[@class="col-lg-6 col-6 plr-cities"]').filter({ hasText: 'Chennai'}).click();

        // 2. Select any available movie
        const firstMovie = page.locator('//*[@class="now-movies"]').first();
        // const selectedMovie = page.locator('//*[@class="now-movies"]').filter({ hasText: movieName});

        await firstMovie.getByRole('button', { name: 'Book', exact: true}).click();

        // Making sure page is loaded:

        await expect(page.locator('//*[@class="movie-names"]')).toBeVisible();

        // 3. Select the date

        const calendarRow = page.locator('//*[@class="calnder-current fordesktop"]');
        
        await calendarRow.locator('//*[@class="dates-inactive"]').filter({ hasText: 'Tomorrow'}).click();

        await page.waitForTimeout(2000);

        // 4. Select the cinema
        const cinemaList = page.locator('//*[@class="pvr-movie-time"]');

        await expect(cinemaList.locator('//*[@class="p-accordion-tab p-accordion-tab-active"]').first());

        // 5. Select the show timing & 6. Click on the Book button

        const theatreSet = cinemaList.locator('//*[@class="p-accordion-tab p-accordion-tab-active"]').first();

        await theatreSet.locator('//*[@class="box-slot-moviesession show-spaces pointer"]').first().click();

        // 7. Click on Accept for the Terms & Conditions 

        await expect(page.locator('//*[@class="p-dialog-content"]')).toBeVisible();

        const tcDialog = page.locator('//*[@class="p-dialog-content"]');

        await tcDialog.getByRole('button', { name: 'Accept', exact: true}).click();

        // 8. Select two available seats

        await page.locator('//*[@class="seat-current-pvr"]').first().click(); // Seat 1

        await page.locator('//*[@class="seat-current-pvr"]').first().click(); // Seat 2

        // 9. Click on the proceed button

        await page.locator('//*[@class="register-btn"]').getByRole('button', { name: 'Proceed'});

        // 10.

        await expect(page).toHaveURL('https://www.pvrcinemas.com/select-food');

        const grandTotal = page.locator('//*[@class="all-grand"]').allTextContents();

        console.log(grandTotal);

        await page.waitForTimeout(4000);

        await browser.close();
    });