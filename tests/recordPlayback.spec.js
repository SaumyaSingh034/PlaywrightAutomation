import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.getByPlaceholder('Type to Select Countries').click();
  await page.getByPlaceholder('Type to Select Countries').fill('ind');
  await page.getByPlaceholder('Type to Select Countries').press('ArrowDown');
  await page.getByPlaceholder('Type to Select Countries').press('ArrowDown');
  await page.getByPlaceholder('Type to Select Countries').press('Enter');
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkbox-example').getByText('Option2').click();
  await page.locator('#checkBoxOption1').check();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByPlaceholder('Enter Your Name').fill('Ssaumya');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByPlaceholder('Hide/Show Example').click();
  await page.getByPlaceholder('Hide/Show Example').fill('show');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('cell', { name: '25' }).nth(1).click();
});