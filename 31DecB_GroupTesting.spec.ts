import{test, expect} from '@playwright/test'

test.describe.parallel('Group Smoke', ()=>
    {

        test('Sign-Up test', ()=>
            {
                console.log('Sign-Up test')
            })

        test('Login test', ()=>
            {
                console.log('Login test')
            })

        test('zimbabwe Country', ()=>
            {
                console.log('zimbabwe is a country name')
            })
    })

test.describe('Group Regression', ()=>
    {

        test('Forgot password', ()=>
            {
                console.log('forgot my password')
            })

        test('Edit profile section', ()=>
            {
                console.log('want to edit my profile section')
            })
    })







































