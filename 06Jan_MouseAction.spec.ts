import{test, expect} from '@playwright/test'

test('Handling the Mouse Events', async({page})=>
    {
        await page.goto('https://vinothqaacademy.com/mouse-event/')
        const drag=page.locator('[id="draggableElement"]')
        const dragable=page.locator('[id="droppableElement"]')
        await drag.dragTo(dragable)   
        
        await page.locator('[id="textbox"]').type('PlayWright Automation')

        await page.locator('[id="dblclick"]').dblclick()

        await page.locator('[id="rightclick"]').click({button:'right'})

        await page.locator("//a[text()='Alert Popup']").click()

        await page.waitForTimeout(5000)
    })

test('Handling the Keyboard Events', async({page})=>
    {
        await page.goto('https://www.facebook.com/')
        await page.locator('[id="email"]').pressSequentially('rajusaini28@gmail.com',{delay:200})
        await page.waitForTimeout(3000)

    })

test.only('Google.com', async ({ page }) => 
    {
    await page.goto('https://www.google.com/')
    await page.locator('[name="q"]').focus()
    await page.keyboard.type('playwright')
    await page.waitForTimeout(3000)
    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
 

    });














