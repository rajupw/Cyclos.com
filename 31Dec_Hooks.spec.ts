import{test, expect} from '@playwright/test'

test.beforeAll('Open the excel sheet', ()=>
    {
        console.log(' -- open the excel sheet --')
    })

test.beforeEach('launch the browser', ()=>
    {
        console.log('--- launch the browser ---')
    })

test('verify the sign-up functionality', ()=>
    {
      console.log(' --- sign-up functionality ---')
    })

test('verify the log-in functionality', ()=>
    {
      console.log(' -- log-in functionality --')
    })

test.afterEach('Close the browser', ()=>
    {
        console.log('---- Close the browser -----')
    })

test.afterAll('Close the Excel Sheet', ()=>
    {
        console.log('-- close excel sheet -- ')
    })