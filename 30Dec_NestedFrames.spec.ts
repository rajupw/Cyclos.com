import{test, expect} from '@playwright/test'

test('How to handle Nested Frames', async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    await page.locator("//a[text()='Iframe with in an Iframe']").click()
    const frames=page.frames()
    console.log('Number of frames : ',frames.length)

    //locate the frame
    const firstframe=page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'})
    if(firstframe)
    {
        //how to locate the child frame
        const childFrame=firstframe.childFrames()
        console.log('Child Frames: ', childFrame.length)

        await childFrame[0].fill('[type="text"]','Playwright automation')
    }
})
















