import {test, expect} from '@playwright/test'

test('How to take screenshot with timestamp in the playwright', async({page})=>
    {
        await page.goto('https://www.facebook.com/')

        //snap for displayed page
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await page.screenshot({path:`C:/Playwright_Automation/Screenshot/Display_page_${timestamp}.png`})

        // full page snap
        await page.screenshot({path: `C:/Playwright_Automation/Screenshot/Full_Page.png`, fullPage: true});

        // snap for specific element
        await page.locator("[name='login']").screenshot({path: 'C:/Playwright_Automation/Screenshot/Specific_element.jpeg'});
    })

























