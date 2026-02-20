import {test, expect} from '@playwright/test'

// test data
const searchItems: string[] = ['Laptop', 'iPhone', 'Smartphone', 'Gift cards', 'iPad']
for (const item of searchItems) 
{
    test(`Search the ${item} in Flipkart`, async ({ page }) => 
    {

        await page.goto('https://www.flipkart.com/')
        await page.locator('[type="text"]').pressSequentially(item)
        await page.locator('[type="text"]').press('Enter')
    });
}


