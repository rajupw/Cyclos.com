import { test, expect, Page, Locator } from '@playwright/test'
import { LoginPage } from '../Cyclos_Pages/CyclosLoginPage'
import { QRCodePage } from '../Cyclos_Pages/Cyclos_QRCode';


test('Verify that user is able to generate the QR code', {tag:'@smoke'}, async({page})=>
    {
        const login = new LoginPage(page);
        await login.navigatewebPage('https://demo.cyclos.org/ui/home')
        await login.fillingLogin('demo','1234')
        const qrcode=new QRCodePage(page);
        await qrcode.generateQRCode('1');
        await expect(qrcode.qrcodetitle).toBeVisible({timeout:30000});
    })












