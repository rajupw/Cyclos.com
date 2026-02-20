import{test, expect} from '@playwright/test'

test('Explore Build-In-Locators in Playwright',{tag:'@sanity'}, async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

        // 1. getByRole() Locators
        await expect(page.getByRole('button', {name:'button'}).first()).toBeVisible()
        await page.getByRole('button', {name:'button'}).first().click()

        await expect(page.getByRole('textbox',{name:'username'})).toBeVisible()
        await expect(page.getByRole('textbox',{name:'username'})).toBeEditable()
        await expect(page.getByRole('textbox',{name:'username'})).toBeEmpty()
        await page.getByRole('textbox',{name:'username'}).fill('Playwright Automation')

        // 2. getByText() Locators
        await expect(await page.getByText('Submit Form')).toBeVisible()
        await page.getByText('Submit Form').click()

        // 3. getByLabel() Locators
        await expect(page.getByLabel('Email Address:')).toBeEmpty()
        await expect(page.getByLabel('Email Address:')).toBeVisible()
        await expect(page.getByLabel('Email Address:')).toBeEditable()
        await page.getByLabel('Email Address:').fill('rajusaini28@gmail.com')

        await page.getByLabel('Password').fill('123456')
        await page.getByLabel('Your Age:').fill('34')

        // 4. getByPlaceholder() Locators
        await page.getByPlaceholder('Enter your full name').fill('Raju Saini')
        await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('8178502474')
        await page.getByPlaceholder('Type your message here...').fill('Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript Playwright Automation Testing via TypeScript & JavaScript')
        await page.getByPlaceholder('Search products...').fill('Iphone-17 pro')
        // await page.getByText('Search').click()

        // 5. getByAltText() Locators
        await expect(page.getByAltText('logo image')).toBeVisible()
        await page.getByAltText('logo image').click()

        // 6. getByTitle() Locators
        await expect(page.getByTitle('Home page link')).toBeVisible()
        await page.getByTitle('Tooltip text').click()
        await page.getByTitle('Click to save your changes').click()

        // 7. getByTestId() Locators
        await expect(page.getByTestId('edit-profile-btn')).toBeVisible()
        await page.getByTestId('edit-profile-btn').click()


   




        await page.waitForTimeout(5000);




    })

    











