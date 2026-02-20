import { test, expect } from '@playwright/test'

//Only one particular spce file
test.describe.configure({mode:'parallel'})

test('Sign-Up test', () => {
    console.log('Sign-Up test')
})

test('Login test', () => {
    console.log('Login test')
})

test('Forgot password', () => {
    console.log('I forgot the my password')
})

test('Edit profile', () => {
    console.log('Want to edit my profile section')
})

test('zimbabwe Country', () => {
    console.log('zimbabwe is a country name')
})

