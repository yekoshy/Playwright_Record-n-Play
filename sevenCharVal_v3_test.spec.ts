import { test, expect } from '@playwright/test';

// 1. Import your JSON file
import testData from './testcases.json';

// 2. Wrap the tests in a describe block
test.describe('7-Character Validation Tests', () => {

  // 👉 ADD THIS LINE: Tell Playwright to run tests in this file in parallel
  test.describe.configure({ mode: 'parallel' });

  // 3. Loop through each test case in your JSON file
  for (const data of testData) {
    
    // 4. Create a dynamic test for each item
    test(data.title, async ({ page }) => {
      await page.goto('https://testpages.eviltester.com/apps/7-char-val/');

      await page.locator('input[name="characters"]').fill(data.input);
      await page.getByRole('button', { name: 'Check Input' }).click();

      // 5. Handle the expected result
      const expectedText = data.expected.startsWith('Valid Value') 
        ? 'Valid Value' 
        : 'Invalid Value';

      await expect(page.locator('input[name="validation_message"]')).toHaveValue(expectedText);
    });
  }
});