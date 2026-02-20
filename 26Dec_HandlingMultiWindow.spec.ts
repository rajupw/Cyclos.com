import{test, expect, chromium} from '@playwright/test'
test('Handling the multiple windows in the Playwright', async()=>
    {
        const broswer = await chromium.launch()
        const context = await broswer.newContext()   // To open user
        const page = await context.newPage()    // To open new tab/page

        await page.goto('https://phptravels.com/')
        const [tabs] = await Promise.all([page.waitForEvent('popup'), page.click("(//span[text()='login'])[1]")])
        const pages = await context.pages()
        console.log('Number of pages : ', pages.length)

        console.log('First page title : ', await page.title())
        await pages[1].waitForLoadState()
        console.log('Second page title : ', await pages[1].title())

        // await page.locator("(//span[text()='login'])[1]").click()
        await page.locator("[id='email']").fill('playwright@gmail.com')
        await page.locator("[id='password']").fill('123456789')
        await page.getByText('Sign In to your account').click()
        // await page.waitForTimeout(5000)
    })