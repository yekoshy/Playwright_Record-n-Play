# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sevenCharVal_v2_test.spec.ts >> 7-Character Validation Tests >> TC18: Invisible Characters
- Location: sevenCharVal_v2_test.spec.ts:13:9

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input[name="validation_message"]')
Expected: "Invalid Value"
Received: "Valid Value"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('input[name="validation_message"]')
    9 × locator resolved to <input value="" type="text" onfocus="this.blur()" name="validation_message"/>
      - unexpected value "Valid Value"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5]:
          - /url: /
          - img [ref=e7]:
            - generic "Test Pages" [ref=e10]
            - generic "PRACTICE SOFTWARE TESTING" [ref=e11]
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "Pages" [ref=e15]:
              - /url: /pages/
          - listitem [ref=e16]:
            - link "Apps" [ref=e17]:
              - /url: /apps/
          - listitem [ref=e18]:
            - link "Challenges" [ref=e19]:
              - /url: /challenges/
          - listitem [ref=e20]:
            - link "Reference Information and Tutorials" [ref=e21]:
              - /url: /reference/
    - generic [ref=e22]:
      - text: Support this site by joining our Patreon. For as little as $1 a month you receive exclusive ad-free content, ebooks and online training courses. —
      - link "Learn more" [ref=e23]:
        - /url: https://patreon.com/eviltester
  - generic [ref=e24]:
    - generic [ref=e26]:
      - complementary [ref=e27]:
        - generic [ref=e28]:
          - button "Toggle section navigation" [ref=e31] [cursor=pointer]: 
          - text:                                                                                                  
      - main [ref=e32]:
        - navigation "breadcrumb" [ref=e33]:
          - list [ref=e34]:
            - listitem [ref=e35]:
              - link "Apps" [ref=e36]:
                - /url: /apps/
            - listitem [ref=e37]: / 7 Char Val
        - generic [ref=e38]:
          - heading "7 Char Val" [level=1] [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - paragraph [ref=e42]: "Tags:"
              - list [ref=e43]:
                - listitem [ref=e44]:
                  - link "Exploratory Testing" [ref=e45]:
                    - /url: https://testpages.eviltester.com/tags/exploratory-testing/
                - listitem [ref=e46]:
                  - link "Interaction" [ref=e47]:
                    - /url: https://testpages.eviltester.com/tags/interaction/
                - listitem [ref=e48]:
                  - link "JavaScript" [ref=e49]:
                    - /url: https://testpages.eviltester.com/tags/javascript/
            - generic [ref=e50]:
              - paragraph [ref=e51]: "Categories:"
              - list [ref=e52]:
                - listitem [ref=e53]:
                  - link "Micro App" [ref=e54]:
                    - /url: https://testpages.eviltester.com/categories/micro-app/
          - paragraph [ref=e56]: This is a simple JavaScript powered validation input. Only A-Z, a-z, 0-9, and * are valid characters.
          - separator [ref=e57]
          - generic [ref=e58]:
            - heading "Please Enter Your 7 character value" [level=2] [ref=e59]
            - paragraph [ref=e60]: Only A-Z, a-z, 0-9, and * are valid characters.
            - generic [ref=e61]:
              - paragraph [ref=e62]:
                - text: "Your 7 digits:"
                - textbox [ref=e63]: abc\tdef
                - textbox [ref=e64]: Valid Value
              - paragraph [ref=e65]:
                - button "Check Input" [ref=e66] [cursor=pointer]
          - generic [ref=e67]:
            - separator [ref=e68]
            - generic [ref=e69]:
              - paragraph [ref=e70]:
                - link "7 Char Val - Instructions" [ref=e71]:
                  - /url: /apps/7-char-val/7-char-val-instructions/
              - paragraph
    - contentinfo [ref=e72]:
      - generic [ref=e73]:
        - paragraph [ref=e74]:
          - text: Help keep this site free by joining our
          - link "Patreon Membership site" [ref=e75]:
            - /url: https://patreon.com/eviltester
          - text: . Membership costs as little as $1 a month and includes access to exclusive
          - link "e-books and online training courses" [ref=e76]:
            - /url: https://www.testerhq.com/
          - text: .
        - paragraph [ref=e77]:
          - text: If you'd like to see your advertising message here or learn about corporate sponsorship then
          - link "Contact Us" [ref=e78]:
            - /url: https://linkedin.com/in/eviltester
          - text: .
      - generic [ref=e80]:
        - list [ref=e82]:
          - listitem "Twitter" [ref=e83]:
            - link "Twitter" [ref=e84]:
              - /url: https://twitter.com/eviltester
              - generic [ref=e85]: 
          - listitem "LinkedIn" [ref=e86]:
            - link "LinkedIn" [ref=e87]:
              - /url: https://linkedin.com/in/eviltester
              - generic [ref=e88]: 
        - list [ref=e90]:
          - listitem "GitHub" [ref=e91]:
            - link "GitHub" [ref=e92]:
              - /url: https://github.com/eviltester
              - generic [ref=e93]: 
        - generic [ref=e94]:
          - generic [ref=e95]: © 2025–2026 Compendium Developments Ltd
          - link "Privacy Policy" [ref=e97]:
            - /url: https://www.eviltester.com/page/privacy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // 1. Import your JSON file
  4  | import testData from './testcases.json';
  5  | 
  6  | // 2. Wrap the tests in a describe block (optional, but good for organization)
  7  | test.describe('7-Character Validation Tests', () => {
  8  | 
  9  |   // 3. Loop through each test case in your JSON file
  10 |   for (const data of testData) {
  11 |     
  12 |     // 4. Create a dynamic test for each item, using the title from the JSON
  13 |     test(data.title, async ({ page }) => {
  14 |       await page.goto('https://testpages.eviltester.com/apps/7-char-val/');
  15 | 
  16 |       // Fill the input with the data from the JSON
  17 |       // (Note: Playwright's .fill() automatically clears the field first, so .click() is unnecessary)
  18 |       await page.locator('input[name="characters"]').fill(data.input);
  19 |       
  20 |       await page.getByRole('button', { name: 'Check Input' }).click();
  21 | 
  22 |       // 5. Handle the expected result
  23 |       // Some of your JSON expected values have extra notes like "(or truncated to 7...)". 
  24 |       // The app UI only ever outputs "Valid Value" or "Invalid Value", so we clean up the string here:
  25 |       const expectedText = data.expected.startsWith('Valid Value') 
  26 |         ? 'Valid Value' 
  27 |         : 'Invalid Value';
  28 | 
  29 |       // Assert that the output matches the expected text
> 30 |       await expect(page.locator('input[name="validation_message"]')).toHaveValue(expectedText);
     |                                                                      ^ Error: expect(locator).toHaveValue(expected) failed
  31 |     });
  32 |   }
  33 | });
```