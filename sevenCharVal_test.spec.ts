import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/apps/7-char-val/');
  await page.locator('input[name="characters"]').click();
  await page.locator('input[name="characters"]').fill('hhhh');
  await page.getByRole('button', { name: 'Check Input' }).click();
  await expect(page.locator('input[name="validation_message"]')).toHaveValue('Invalid Value');
  await page.locator('input[name="characters"]').click();
  await page.locator('input[name="characters"]').fill('0000000');
  await page.getByRole('button', { name: 'Check Input' }).click();
  await expect(page.locator('input[name="validation_message"]')).toHaveValue('Valid Value');
});