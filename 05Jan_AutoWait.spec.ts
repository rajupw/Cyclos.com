import{test, expect} from '@playwright/test'

test('AutoWait in PlayWright', async({page})=>
    {
        test.setTimeout(60000)  // This pairticular test will take 6 ms
        await page.goto('https://www.amazon.in/')
        await page.locator('[id="twotabsearchtextbox"]').fill('iphone 15')  //
        await page.locator('[type="submit"]').click({timeout:30000})


    })

test('Check AutoWait', async({page})=>
    {
        await page.goto('https://www.amazon.in/')
        await page.locator('[id="twotabsearchtextbox"]').fill('iphone 15',{force:true})  //
        await page.locator('[type="submit"]').click({force:true})


    })


















