import { test, expect, Page, Locator } from '@playwright/test'

class AutomationPracticePage {
    readonly page: Page;
    readonly signup_loginlink: Locator;
    readonly nameTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly signupButton: Locator;
    readonly title: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    // readonly DOB: Locator;
    readonly newslettercheckbox: Locator;
    readonly offerscheckbox: Locator;
    readonly firstnametextbox: Locator;
    readonly lastnametextbox: Locator;
    readonly companytextbox: Locator;
    readonly address1textbox: Locator;
    readonly address2textbox: Locator;
    readonly countrytextbox: Locator;
    readonly statetextbox: Locator;
    readonly citytextbox: Locator;
    readonly zipcodeTextbox: Locator;
    readonly mobilenumbertextbox: Locator;
    readonly createaccountbutton: Locator;
    readonly accountcreatedmessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signup_loginlink = page.getByRole('link', { name: ' Signup / Login' })
        this.nameTextbox = page.getByRole('textbox', { name: 'Name' })
        this.emailTextbox = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
        this.title = page.getByRole('radio', { name: 'Mr.' })
        this.name = page.getByRole('textbox', { name: 'Name *', exact: true })
        this.email = page.getByRole('textbox', { name: 'Name *', exact: true })
        this.password = page.getByRole('textbox', { name: 'Password *' })
        // this.DOB = page.getByText('Date of Birth Day 1 2 3 4 5 6')
        this.newslettercheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
        this.offerscheckbox = page.getByText('Receive special offers from')
        this.firstnametextbox = page.getByRole('textbox', { name: 'First name *' })
        this.lastnametextbox = page.getByRole('textbox', { name: 'Last name *' })
        this.companytextbox = page.getByRole('textbox', { name: 'Company', exact: true })
        this.address1textbox = page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.address2textbox = page.getByRole('textbox', { name: 'Address 2' })
        this.countrytextbox = page.getByLabel('Country *')
        this.statetextbox = page.getByRole('textbox', { name: 'State *' })
        this.citytextbox = page.getByRole('textbox', { name: 'City *' })
        this.zipcodeTextbox = page.locator('#zipcode')
        this.mobilenumbertextbox = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.createaccountbutton = page.getByRole('button', { name: 'Create Account' })
        this.accountcreatedmessage = page.getByText('Account Created!')

    }

    async navigatewebPage(baseur: string) {
        await this.page.goto(baseur)
    }

    async FillSignupForm(name: string, email: string) {
        await this.signup_loginlink.click();
        await this.nameTextbox.fill(name)
        await this.emailTextbox.fill(email)
        await this.signupButton.click();
    }

    async FillAccountInformation(password: string, firstName: string, lastName: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.title.click();
        await this.password.fill(password);
        // await this.DOB.click();
        await this.newslettercheckbox.check();
        await this.offerscheckbox.check();
        await this.firstnametextbox.fill(firstName);
        await this.lastnametextbox.fill(lastName);
        await this.companytextbox.fill(company);
        await this.address1textbox.fill(address1);
        await this.address2textbox.fill(address2);
        await this.countrytextbox.selectOption(country);
        await this.statetextbox.fill(state);
        await this.citytextbox.fill(city);
        await this.zipcodeTextbox.fill(zipcode);
        await this.mobilenumbertextbox.fill(mobileNumber);
        await this.createaccountbutton.click();
    }

    async verifyAccountCreatedMessage() {
        await expect(this.accountcreatedmessage).toBeVisible();
    }
}

    export default AutomationPracticePage;

















