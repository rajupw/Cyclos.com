import { test, expect, Page, Locator } from '@playwright/test'

export class InformationPage {
    readonly page: Page;
    readonly informationlink: Locator;
    readonly contactformlink: Locator;
    readonly questiontypetextbox: Locator;
    readonly nametextbox: Locator;
    readonly emailtextbox: Locator;
    readonly subjecttextbox: Locator;
    readonly messagetextbox: Locator;
    readonly sendmessagebutton: Locator;
    readonly wrongcaptchasmessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.informationlink = page.getByRole('link', { name: 'Information' });
        this.contactformlink = page.locator('#menu-dropdown-content').getByRole('link', { name: 'Contact form' })
        this.questiontypetextbox = page.locator('#iframe_0').contentFrame().getByRole('combobox')
        this.nametextbox = page.locator('#iframe_0').contentFrame().locator('input[name="your-name"]')
        this.emailtextbox = page.locator('#iframe_0').contentFrame().locator('input[name="your-email"]')
        this.subjecttextbox = page.locator('#iframe_0').contentFrame().locator('input[name="your-subject"]')
        this.messagetextbox = page.locator('#iframe_0').contentFrame().locator('textarea[name="your-message"]')
        this.sendmessagebutton = page.locator('#iframe_0').contentFrame().getByRole('button', { name: 'Send' })
        this.wrongcaptchasmessage = page.locator('#iframe_0').contentFrame().getByLabel('Contact form').getByText('Your entered code is')
    }

    async fillContactForm(
        questiontype: string,
        name: string,
        email: string,
        subject: string,
        message: string
    ) {
        await this.informationlink.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.contactformlink.click()
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1000);

        await this.questiontypetextbox.click()
        await this.questiontypetextbox.selectOption('Media Relations')
        await this.questiontypetextbox.click()

        await this.nametextbox.fill(name);
        await this.emailtextbox.fill(email);
        await this.subjecttextbox.fill(subject);
        await this.messagetextbox.fill(message);
        // Skipping captcha verification
        await this.sendmessagebutton.click();
    }

        async checkwrongcaptchasmessage() {
        await expect(this.wrongcaptchasmessage).toBeVisible();

    }
}







