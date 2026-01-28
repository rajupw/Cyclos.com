
import{test, expect} from '@playwright/test'
import{LoginPage} from '../Cyclos_Pages/CyclosLoginPage'

test.describe('Verify Cyclos loging data', async()=>
    {
        test('Verify the cyclos login with valid data' , {tag:'@smoke'}, async({page})=>
    {
        const login=new LoginPage(page);
        await login.navigatewebPage('https://demo.cyclos.org/ui/home')
        await login.fillingLogin('demo', '123456')
        await expect(login.logoutlink).toBeVisible({timeout:30000})
    })

test('Verify the cyclos login with invalid data', {tag:'@smoke'}, async({page})=>
    {
        const login=new LoginPage(page);
        await login.navigatewebPage('https://demo.cyclos.org/ui/home')
        await login.fillingLogin('', '123456')
        // await expect(login.logoutlink).not.toBeVisible({timeout:30000})
    })
})


