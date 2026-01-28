import{test, expect, Page, Locator} from '@playwright/test'

export class LoginPage
{
    readonly page:Page;
    readonly loginlink:Locator;
    readonly usernametextbox:Locator;
    readonly passwordtextbox:Locator;
    readonly submitbutton:Locator;
    readonly logoutlink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.loginlink=page.getByLabel('Login')
        this.usernametextbox=page.getByRole('textbox', { name: 'User' })
        this.passwordtextbox=page.getByRole('textbox', { name: 'Password' })
        this.submitbutton=page.getByRole('button', { name: 'Submit' })
        this.logoutlink=page.getByRole('link', { name: 'Logout' })
    }

    async navigatewebPage(baseurl:string)
    {
        await this.page.goto(baseurl)
    }

    async fillingLogin(username:string, password:string)
    {
        await this.loginlink.click();
        await this.usernametextbox.fill(username);
        await this.passwordtextbox.fill(password);
        await this.submitbutton.click();
    }

    async checklogoutlink() 
    {
        return this.logoutlink;
    }
}
















