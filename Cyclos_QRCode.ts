import{test, expect, Page, Locator} from '@playwright/test'

export class QRCodePage
{
    readonly page:Page;
    readonly bankinglink:Locator;
    readonly qrcodelink:Locator;
    readonly amouttextbox:Locator;
    readonly generatebutton:Locator;
    readonly qrcodetitle:Locator;

      constructor(page:Page)
    {
        this.page=page;
        this.bankinglink=page.getByRole('link', { name: 'Banking' });
        this.qrcodelink=page.locator('side-menu').getByRole('link', { name: 'Receive QR-code' });
        this.amouttextbox=page.getByRole('textbox', { name: 'Amount *' });
        this.generatebutton=page.getByRole('button', { name: 'Generate QR code' });
        this.qrcodetitle=page.getByText('Receive QR-code payment');
    }

    async generateQRCode(amout:any)
    {
        await this.bankinglink.click();
        await this.qrcodelink.click();
        await this.amouttextbox.fill(amout);
        this.generatebutton.click();
    }

    async checkqrcodetitle()
    {
        return this.qrcodetitle
    }
}









