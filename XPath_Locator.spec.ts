import{test, expect} from '@playwright/test'

test('Login with seaglabs', async({page})=>
    {
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill('secret_sauce')
        await page.getByPlaceholder('Password').fill('secret_sauce')
        // await page.locator('[id=login-button]').click()      // In case not able to locate the element via built-In locator then we can use directly locator() : and take Id, class, name any attribut & it's value.
        await page.locator('[class=submit-button btn_action]')
    })

    test('XPath to locate the web element', async({page})=>
    {
        await page.goto('https://www.saucedemo.com/')
        await page.locator("//input[@id='user-name']").fill('secret_sauce')
        await page.locator("//input[@id='password']").fill('secret_sauce')
        await page.locator("//input[@id='login-button']").click()
    })

    test('Operators in XPath to locate web Elements', async({page})=>
    {
        await page.goto('https://www.saucedemo.com/')
        await page.locator("//input[@id='user-name' and @name='user-name']").fill('secret_sauce')
        await page.locator("//input[@id='password' and @name='password']").fill('secret_sauce')
        await page.locator("//input[@id='login-button' and @name='login-button']").click()
    })












