// 22 Dec 2025

import {test, expect} from '@playwright/test'

test('Handling the web elements in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page.getByPlaceholder('Enter Name')).toBeVisible()
        await expect(page.getByPlaceholder('Enter Name')).toBeEditable()
        await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()
        await page.getByPlaceholder('Enter Name').fill('Playwright')

        await page.getByPlaceholder('Enter EMail').fill('playwright@gmail.com')
        await page.getByPlaceholder('Enter Phone').fill('1234567890')
        await page.getByLabel('Address:').fill('A-1102 Cosmos Golden Height, Crossing Republic, Ghaziabad Up')

        // await page.waitForTimeout(5000)
    })

test('Handling the Radio Buttons in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page.locator("//input[@id='male']")).toBeVisible()  //  kya radio button visible h ? 
        expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy  // kya radion button phale se checked tha ? 
        await page.locator("//input[@id='male']").check()
        await expect(page.locator("//input[@id='male']")).toBeChecked()     // for confirmation : kya radion button checked hua ? 

        await expect(page.locator("//input[@id='female']")).not.toBeChecked()   // for confirmation : female radion button checked nhi h 
        // await page.waitForTimeout(5000)
    })

test('Handling the checkboxes in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')

        await expect(page.locator("//input[@id='sunday']")).toBeVisible()
        expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy()
        await page.locator("//input[@id='sunday']").check()

        await expect(page.locator("//input[@id='sunday']")).toBeChecked()
    })

test('How to select the group of checkboxes in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        const selectoption = ['monday', 'tuesday', 'friday']
        for(const checkbox of selectoption)
        {
            await page.locator(`//input[@id='${checkbox}']`).check()
        }

        // Uncheck the radio button
        await page.locator("//input[@id='friday']").uncheck()
    })

test('How to handle the drop-down in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')

        // select by value
        // await page.locator("//select[@id='country']").selectOption('france')

        // select by label
        // await page.locator("//select[@id='country']").selectOption({label:'United Kingdom'})

        // select by index
        await page.locator("//select[@id='country']").selectOption({index:1})
        // await page.waitForTimeout(5000)
    })

test('Handling multiple elements in drop-down list in the playwright', async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator("//select[@id='country']").selectOption(['germany', 'australia', 'india'])
        //await expect(page.locator("//select[@id='country']")).toContainText('india')
        // await page.waitForTimeout(5000)
    })