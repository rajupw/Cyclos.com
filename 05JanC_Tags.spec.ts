// npx playwright test 05JanC_Tags.spec.ts --grep ' @smoke'
// npx playwright test 05JanC_Tags.spec.ts --grep ' @sanity'

import{test, expect} from '@playwright/test'

test('Google',{tag:['@smoke,@regression']}, async({page})=>
    {
        await page.goto('https://www.google.com/')
    })

test('facebook',{tag:'@sanity'}, async({page})=>
    {
        await page.goto('https://www.facebook.com/')
    })

test('amazon',{tag:'@smoke'}, async({page})=>
    {
        await page.goto('https://www.amazon.com/')
    })

test('flipkart',{tag:'@sanity'}, async({page})=>
    {
        await page.goto('https://www.flipkart.com/')
    })









