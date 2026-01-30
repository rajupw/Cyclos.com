import { test, expect, Page, Locator } from '@playwright/test'
import AutomationPracticePage from '../Cyclos_Pages/Automation_Practice';


test('Verify that user is able to navigate to Signup/Login page and fill the form', {tag:'@smoke'}, async ({ page }) => 
    {
    const automationPracticePage = new AutomationPracticePage(page);
    await automationPracticePage.navigatewebPage('https://automationexercise.com/')
    await automationPracticePage.FillSignupForm('Raju Saini', 'rajusaini2809@gmail.com');
    await page.waitForTimeout(2000);

    await automationPracticePage.FillAccountInformation
        ('Password', 
        'Raju', 
        'Saini', 
        'Physics Wallah', 
        'Ghaziabad crossing', 
        'A-1102 comsmos golden height corssing republic',
        'India',
        'Uttar Pradesh',
        'Ghaziabad',
        '244303',
        '8178502474');

    await page.waitForTimeout(2000);
    await automationPracticePage.verifyAccountCreatedMessage();
});




    








