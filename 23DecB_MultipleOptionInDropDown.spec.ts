import { test, expect } from '@playwright/test';

test('Handling multiple options in drop-down list', async ({ page }) => 
    {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdownOption = page.locator('#country > option');

    await expect(dropdownOption).toHaveCount(10);

    const optionsText: string[] = (await dropdownOption.allInnerTexts()).map(text => text.trim());

    console.log(optionsText);

    expect(optionsText).toContain('France');


        // for(const text of optionsText)
        // {
        //     console.log(text.trim())

        // } 
    });

























