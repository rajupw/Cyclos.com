import{test, expect} from '@playwright/test'

test('Handling the Simple alert in Playwright Automation', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        page.on('dialog', (dailog)=>
        {

            console.log('Type of Alert : ', dailog.type())
            expect(dailog.type()).toBe('alert')
            console.log('Alert Message 1 : ', dailog.message())
            expect(dailog.message()).toContain('I am an alert box!')
            dailog.accept()
            
        })
        // page.on('dialog',(dialog)=> dialog.accept())  // in case you are not required validation like this then you can go with this single line.
        await page.locator("id=alertBtn").click()
    })

test('Handling the Confirmation alert in Playwright Automation', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
            page.on('dialog', (dailog)=>
        {

            console.log('Type of Alert : ', dailog.type())
            expect(dailog.type()).toBe('confirm')
            console.log('Alert Message 2 : ', dailog.message())
            expect(dailog.message()).toContain('Press a button!')
            dailog.dismiss()
        })
        await page.locator("[id='confirmBtn']").click()
        await expect(page.locator("[id='demo']")).toHaveText('You pressed Cancel!')
    })

test('Handling the Prompt alert in Playwright Automation', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
            page.on('dialog', (dailog)=>
            {
                console.log('Type of Alert : ', dailog.type())
                expect(dailog.type()).toBe('prompt')
                expect(dailog.message()).toContain('Please enter your name:')
                console.log('Default Text is : ', dailog.defaultValue())
                dailog.accept('playwright')

            })
            await page.locator("[id='promptBtn']").click()
            await expect(page.locator("[id='demo']")).toHaveText('Hello playwright! How are you today?')
            })



















