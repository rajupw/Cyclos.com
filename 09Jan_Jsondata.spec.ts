// read the data from JSON
import {test, expect} from '@playwright/test'
import fs from 'fs'

//Read the data from json

const jsonpath = "C:/Playwright_Automation/Test Data/DummyTestData.json";

const data = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))

test.describe('search the item in flipkart', () => 
    {
    for (const searchItems of data) 
        {
        test(`Search items ${searchItems.item}`, async ({page})=> 
            {
            await page.goto('https://www.flipkart.com/')
            await page.locator('[type="text"]').pressSequentially(searchItems.item)
            await page.locator('[type="text"]').press('Enter')
            })
        }
    })

