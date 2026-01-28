import { test, expect, Page, Locator } from '@playwright/test'
import { LoginPage } from '../Cyclos_Pages/CyclosLoginPage'
import { InformationPage } from '../Cyclos_Pages/Cyclos_Information';

test('Verify that user is able to use Information page module', async ({ page }) => 
    {
    const login = new LoginPage(page);
    await login.navigatewebPage('https://demo.cyclos.org/ui/home')
    await login.fillingLogin('demo', '1234')
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('networkidle');

    // Add further steps to navigate to the Information page module and verify its functionality
    await page.waitForTimeout(2000);
    const information = new InformationPage(page);
    await information.fillContactForm(
        'Media Relations', 
        'Raju Saini', 
        'raju.saini@pw.live', 
        'Inquiry about services', 
        'I would like to know more about your services.'
    );

    await page.waitForTimeout(2000);
    await information.checkwrongcaptchasmessage()
})