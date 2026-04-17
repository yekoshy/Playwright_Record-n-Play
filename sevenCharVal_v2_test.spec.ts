import { test, expect } from '@playwright/test';

// 1. Import your JSON file
import testData from './testcases.json';

// 2. Wrap the tests in a describe block (optional, but good for organization)
test.describe('7-Character Validation Tests', () => {

  // 3. Loop through each test case in your JSON file
  for (const data of testData) {
    
    // 4. Create a dynamic test for each item, using the title from the JSON
    test(data.title, async ({ page }) => {
      await page.goto('https://testpages.eviltester.com/apps/7-char-val/');

      // Fill the input with the data from the JSON
      // (Note: Playwright's .fill() automatically clears the field first, so .click() is unnecessary)
      await page.locator('input[name="characters"]').fill(data.input);
      
      await page.getByRole('button', { name: 'Check Input' }).click();

      // 5. Handle the expected result
      // Some of your JSON expected values have extra notes like "(or truncated to 7...)". 
      // The app UI only ever outputs "Valid Value" or "Invalid Value", so we clean up the string here:
      const expectedText = data.expected.startsWith('Valid Value') 
        ? 'Valid Value' 
        : 'Invalid Value';

      // Assert that the output matches the expected text
      await expect(page.locator('input[name="validation_message"]')).toHaveValue(expectedText);
    });
  }
});