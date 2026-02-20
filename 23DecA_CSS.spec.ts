// 23 Dec 2025
import{test, expect} from '@playwright/test'

test('Verify that after logged in successfully that user is able to navigate on Dashboard and able to logout as well.', async({page})=>
    {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator('[placeholder="Username"]').fill('Admin')
        await page.locator('[name="password"]').fill('admin123')
        await page.locator('button').click()
        await expect(page.locator("h6[class*='header']")).toBeVisible()
        await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
        await page.getByRole('menuitem', {name:'logout'}).click()
        // await page.waitForTimeout(5000)
    })
































