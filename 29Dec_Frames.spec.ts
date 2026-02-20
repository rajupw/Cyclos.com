import{test, expect, chromium} from '@playwright/test'

test('How to Handle Frame or iFrame in Playwright', async()=>
    {
        const browser = await chromium.launch()     // open chrome browser
        const context = await browser.newContext()    // open pirticular user
        const page = await context.newPage()          // open pirticular tab

        await page.goto('https://demo.automationtesting.in/Frames.html')

        //await page.locator('[type="text"]').fill('Playwright Automation')

        //1. locate the frame by using name attribute
       // await page.frame('SingleFrame')?.locator('[type="text"]').fill('Playwright Automation')

        //2. locate the frame by using URL
       //await page.frame({url: '/SingleFrame.html/'})?.locator('[type="text"]').fill('Web Automation Via Playwright')

       //3. locate the frame by using CSS/Xpath in case there is no attribute name and URL
      // await page.frame('[id="singleframe"]')?.fill('[type="text"]','Hello class how are you ?')

      // Multiple Frames
       await page.locator('[class="analystic"]').nth(1).click()
       

       //To locate the child frame
       //const child=first?.childFrames()
       const frames=await page.frames()
       console.log('Count of frames : ',frames.length)

   






})
    




        





















