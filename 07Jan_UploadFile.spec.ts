import{test, expect} from '@playwright/test'

test('File Upload', async({page})=>
    {
        await page.goto('https://qa-automation-practice.netlify.app/file-upload.html')
        await page.locator('[id="file_upload"]').setInputFiles('C:/Users/Raju Saini/FILE_IMAGE_1_JPG.jpg')





    });
















