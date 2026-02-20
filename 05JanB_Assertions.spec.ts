import{test, expect} from '@playwright/test'

test('Hard assertions in PlayWright', async({page})=>
    {
        await page.goto('https://www.amazon.in/')

        // validation - auto wait
        await expect(page).toHaveURL('https://www.amazon.in/')
        console.log('Actual URL of the page :', page.url())

        //verify the title
        const expectedtitle='Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in';
        await expect(page).toHaveTitle(expectedtitle)
        console.log('Actual title of the page :', await page.title())

        //Non-auto wait
        expect(await page.title()).toContain('Online Shopping site in India:')
    })


test('Soft assertions in PlayWright',{tag:'@smaoke'}, async({page})=>
    {
        await page.goto('https://www.amazon.com/')

        // validation - auto wait
        await expect.soft(page).toHaveURL('https://www.amazon.in/')
        console.log('Actual URL of the page :', page.url())

        //verify the title
        const expectedtitle='Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in';
        await expect.soft(page).toHaveTitle(expectedtitle)
        console.log('Actual title of the page :', await page.title())

         //Non-auto wait
        expect.soft(await page.title()).toContain('Online Shopping site in India:')
 })