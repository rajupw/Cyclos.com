import{test, expect} from '@playwright/test'

test('Locating the web element via locator()', async({page})=>
    {
        await page.goto('https://www.facebook.com/')

        // Property : but it's not recommended
        await page.locator('[name=email]').fill('raju.saini@pw.live')
        await page.locator('[name=pass]').fill('123456')
        await page.locator('[class=x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft]').first().click



        await page.waitForTimeout(5000);

    })

















