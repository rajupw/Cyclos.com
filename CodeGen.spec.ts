import { test, expect } from '@playwright/test';

test('Verify singup flow on facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('playwright@gmail.com');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('1234567890');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Raju');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('saini');
  await page.getByLabel('Year').selectOption('1991');
  await page.getByLabel('Month').selectOption('11');
  await page.getByLabel('Day').selectOption('28');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('8178502474');
  await page.getByRole('textbox', { name: 'New password' }).click();
  await page.getByRole('textbox', { name: 'New password' }).fill('123456789098765');
  await page.getByRole('button', { name: 'Sign up' }).click();
});