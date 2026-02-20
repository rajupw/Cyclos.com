// Read the data from excel sheet
// file -> workbooks -> num of sheet -> sheet -> rows and col

import {test, expect} from '@playwright/test'
import fs from "fs";
import * as XLSX from "xlsx";
const excelpath="Test Data/ExcelSheet.xlsx";
const workbook=XLSX.readFile(excelpath);    // To find the work book
const sheetNames=workbook.SheetNames[0];    // Number of sheet in excel
const mysheet=workbook.Sheets[sheetNames];        // To find my sheet

// Convert into JSON
const data:any = XLSX.utils.sheet_to_json(mysheet);

test.describe('Data Driven', async()=>
{
    for(const testdata of data)
    {
        test(`Search items "${testdata.SearchItems}"`, async ({page})=> 
            {
            await page.goto("https://www.flipkart.com/")
            await page.locator('[type="text"]').pressSequentially(testdata.SearchItems)
            await page.locator('[type="text"]').press('Enter')
            })
    }
})