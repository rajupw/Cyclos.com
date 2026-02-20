import { test, expect } from '@playwright/test';

test('Navigate to facebook', async({page})=>
{
    //load the webpage
    await page.goto('https://www.facebook.com/')

    //verify the title of the page
    await expect(page).toHaveTitle('Facebook – log in or sign up')


})

















