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
- generic [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5] [cursor=pointer]:
          - /url: /
          - img [ref=e7]:
            - generic "Test Pages" [ref=e10]
            - generic "PRACTICE SOFTWARE TESTING" [ref=e11]
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "Pages" [ref=e15] [cursor=pointer]:
              - /url: /pages/
          - listitem [ref=e16]:
            - link "Apps" [ref=e17] [cursor=pointer]:
              - /url: /apps/
          - listitem [ref=e18]:
            - link "Challenges" [ref=e19] [cursor=pointer]:
              - /url: /challenges/
          - listitem [ref=e20]:
            - link "Reference Information and Tutorials" [ref=e21] [cursor=pointer]:
              - /url: /reference/
    - generic [ref=e22]:
      - text: Support this site by joining our Patreon. For as little as $1 a month you receive exclusive ad-free content, ebooks and online training courses. —
      - link "Learn more" [ref=e23] [cursor=pointer]:
        - /url: https://patreon.com/eviltester
  - generic [ref=e24]:
    - generic [ref=e26]:
      - complementary [ref=e27]:
        - generic [ref=e28]:
          - text: 
          - navigation [ref=e29]:
            - list [ref=e30]:
              - listitem [ref=e31]:
                - link "Practice Pages" [ref=e32] [cursor=pointer]:
                  - /url: /
                - list [ref=e33]:
                  - listitem [ref=e34]:
                    - generic [ref=e35]:
                      - text: 
                      - link "Pages" [ref=e36] [cursor=pointer]:
                        - /url: /pages/
                    - text:                                                               
                  - listitem [ref=e37]:
                    - generic [ref=e38]:
                      - text: 
                      - link "Apps" [ref=e39] [cursor=pointer]:
                        - /url: /apps/
                    - list [ref=e40]:
                      - listitem [ref=e41]:
                        - generic [ref=e42]:
                          - text: 
                          - link "Triangle" [ref=e43] [cursor=pointer]:
                            - /url: /apps/triangle/
                      - listitem [ref=e44]:
                        - generic [ref=e45]:
                          - text: 
                          - link "7 Char Val" [ref=e46] [cursor=pointer]:
                            - /url: /apps/7-char-val/
                        - list [ref=e47]:
                          - listitem [ref=e48]:
                            - link "Instructions" [ref=e50] [cursor=pointer]:
                              - /url: /apps/7-char-val/7-char-val-instructions/
                      - listitem [ref=e51]:
                        - generic [ref=e52]:
                          - text: 
                          - link "Shopping Cart" [ref=e53] [cursor=pointer]:
                            - /url: /apps/basiccart/
                      - listitem [ref=e54]:
                        - generic [ref=e55]:
                          - text: 
                          - link "Button Calculator" [ref=e56] [cursor=pointer]:
                            - /url: /apps/button-calculator/
                      - listitem [ref=e57]:
                        - generic [ref=e58]:
                          - text: 
                          - link "Canvas Draw" [ref=e59] [cursor=pointer]:
                            - /url: /apps/canvas-draw/
                      - listitem [ref=e60]:
                        - generic [ref=e61]:
                          - text: 
                          - link "Canvas Scribble" [ref=e62] [cursor=pointer]:
                            - /url: /apps/canvas-scribble/
                      - listitem [ref=e63]:
                        - generic [ref=e64]:
                          - text: 
                          - link "Validated Client Server Form" [ref=e65] [cursor=pointer]:
                            - /url: /apps/client-server-form-validation/
                      - listitem [ref=e66]:
                        - generic [ref=e67]:
                          - text: 
                          - link "HTML Table Generator" [ref=e68] [cursor=pointer]:
                            - /url: /apps/html-table-generator/
                      - listitem [ref=e69]:
                        - generic [ref=e70]:
                          - text: 
                          - link "Countdown Timer" [ref=e71] [cursor=pointer]:
                            - /url: /apps/countdown-timer/
                      - listitem [ref=e72]:
                        - generic [ref=e73]:
                          - text: 
                          - link "Server Side Calculator" [ref=e74] [cursor=pointer]:
                            - /url: /apps/server-side-calculator/
                      - listitem [ref=e75]:
                        - generic [ref=e76]:
                          - text: 
                          - link "Simple Calculator API" [ref=e77] [cursor=pointer]:
                            - /url: /apps/calculator-api/
                      - listitem [ref=e78]:
                        - generic [ref=e79]:
                          - text: 
                          - link "Text Transformer" [ref=e80] [cursor=pointer]:
                            - /url: /apps/text-transformer/
                      - listitem [ref=e81]:
                        - generic [ref=e82]:
                          - text: 
                          - link "Cookie Controlled Login" [ref=e83] [cursor=pointer]:
                            - /url: /apps/simulated-login/
                      - listitem [ref=e84]:
                        - generic [ref=e85]:
                          - text: 
                          - link "Numbers to Text" [ref=e86] [cursor=pointer]:
                            - /url: /apps/numbers-to-text/
                      - listitem [ref=e87]:
                        - generic [ref=e88]:
                          - text: 
                          - link "Note Taker" [ref=e89] [cursor=pointer]:
                            - /url: /apps/note-taker/
                  - listitem [ref=e90]:
                    - generic [ref=e91]:
                      - text: 
                      - link "Challenges" [ref=e92] [cursor=pointer]:
                        - /url: /challenges/
                    - text:             
                  - listitem [ref=e93]:
                    - generic [ref=e94]:
                      - text: 
                      - link "Reference Information and Tutorials" [ref=e95] [cursor=pointer]:
                        - /url: /reference/
                    - text:   
      - complementary [ref=e96]:
        - generic [ref=e98]:
          - paragraph [ref=e99]: Support this site by joining our Patreon. As little as $1 a month, and you receive exclusive content, ebooks and videos.
          - paragraph [ref=e100]:
            - link "Learn More" [ref=e101] [cursor=pointer]:
              - /url: https://patreon.com/eviltester
        - generic [ref=e102]:
          - paragraph [ref=e103]: Tag Cloud
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "Alerts 2" [ref=e106] [cursor=pointer]:
                - /url: /tags/alerts/
                - text: Alerts
                - generic [ref=e107]: "2"
            - listitem [ref=e108]:
              - link "API 20" [ref=e109] [cursor=pointer]:
                - /url: /tags/api/
                - text: API
                - generic [ref=e110]: "20"
            - listitem [ref=e111]:
              - link "Attributes 2" [ref=e112] [cursor=pointer]:
                - /url: /tags/attributes/
                - text: Attributes
                - generic [ref=e113]: "2"
            - listitem [ref=e114]:
              - link "Authentication 1" [ref=e115] [cursor=pointer]:
                - /url: /tags/authentication/
                - text: Authentication
                - generic [ref=e116]: "1"
            - listitem [ref=e117]:
              - link "Automating 3" [ref=e118] [cursor=pointer]:
                - /url: /tags/automating/
                - text: Automating
                - generic [ref=e119]: "3"
            - listitem [ref=e120]:
              - link "Components 1" [ref=e121] [cursor=pointer]:
                - /url: /tags/components/
                - text: Components
                - generic [ref=e122]: "1"
            - listitem [ref=e123]:
              - link "Cookies 3" [ref=e124] [cursor=pointer]:
                - /url: /tags/cookies/
                - text: Cookies
                - generic [ref=e125]: "3"
            - listitem [ref=e126]:
              - link "CSS 4" [ref=e127] [cursor=pointer]:
                - /url: /tags/css/
                - text: CSS
                - generic [ref=e128]: "4"
            - listitem [ref=e129]:
              - link "Elements 19" [ref=e130] [cursor=pointer]:
                - /url: /tags/elements/
                - text: Elements
                - generic [ref=e131]: "19"
            - listitem [ref=e132]:
              - link "Errors 4" [ref=e133] [cursor=pointer]:
                - /url: /tags/errors/
                - text: Errors
                - generic [ref=e134]: "4"
            - listitem [ref=e135]:
              - link "Exploratory Testing 43" [ref=e136] [cursor=pointer]:
                - /url: /tags/exploratory-testing/
                - text: Exploratory Testing
                - generic [ref=e137]: "43"
            - listitem [ref=e138]:
              - link "Files 2" [ref=e139] [cursor=pointer]:
                - /url: /tags/files/
                - text: Files
                - generic [ref=e140]: "2"
            - listitem [ref=e141]:
              - link "Forms 8" [ref=e142] [cursor=pointer]:
                - /url: /tags/forms/
                - text: Forms
                - generic [ref=e143]: "8"
            - listitem [ref=e144]:
              - link "Frames 4" [ref=e145] [cursor=pointer]:
                - /url: /tags/frames/
                - text: Frames
                - generic [ref=e146]: "4"
            - listitem [ref=e147]:
              - link "HTML 1" [ref=e148] [cursor=pointer]:
                - /url: /tags/html/
                - text: HTML
                - generic [ref=e149]: "1"
            - listitem [ref=e150]:
              - link "HTTP 1" [ref=e151] [cursor=pointer]:
                - /url: /tags/http/
                - text: HTTP
                - generic [ref=e152]: "1"
            - listitem [ref=e153]:
              - link "Images 1" [ref=e154] [cursor=pointer]:
                - /url: /tags/images/
                - text: Images
                - generic [ref=e155]: "1"
            - listitem [ref=e156]:
              - link "Input 7" [ref=e157] [cursor=pointer]:
                - /url: /tags/input/
                - text: Input
                - generic [ref=e158]: "7"
            - listitem [ref=e159]:
              - link "Interaction 48" [ref=e160] [cursor=pointer]:
                - /url: /tags/interaction/
                - text: Interaction
                - generic [ref=e161]: "48"
            - listitem [ref=e162]:
              - link "Java 1" [ref=e163] [cursor=pointer]:
                - /url: /tags/java/
                - text: Java
                - generic [ref=e164]: "1"
            - listitem [ref=e165]:
              - link "JavaScript 34" [ref=e166] [cursor=pointer]:
                - /url: /tags/javascript/
                - text: JavaScript
                - generic [ref=e167]: "34"
            - listitem [ref=e168]:
              - link "JSON 1" [ref=e169] [cursor=pointer]:
                - /url: /tags/json/
                - text: JSON
                - generic [ref=e170]: "1"
            - listitem [ref=e171]:
              - link "Local Storage 1" [ref=e172] [cursor=pointer]:
                - /url: /tags/local-storage/
                - text: Local Storage
                - generic [ref=e173]: "1"
            - listitem [ref=e174]:
              - link "Locators 18" [ref=e175] [cursor=pointer]:
                - /url: /tags/locators/
                - text: Locators
                - generic [ref=e176]: "18"
            - listitem [ref=e177]:
              - link "Mobile 1" [ref=e178] [cursor=pointer]:
                - /url: /tags/mobile/
                - text: Mobile
                - generic [ref=e179]: "1"
            - listitem [ref=e180]:
              - link "Navigation 7" [ref=e181] [cursor=pointer]:
                - /url: /tags/navigation/
                - text: Navigation
                - generic [ref=e182]: "7"
            - listitem [ref=e183]:
              - link "Security Testing 1" [ref=e184] [cursor=pointer]:
                - /url: /tags/security-testing/
                - text: Security Testing
                - generic [ref=e185]: "1"
            - listitem [ref=e186]:
              - link "Shadow Dom 3" [ref=e187] [cursor=pointer]:
                - /url: /tags/shadow-dom/
                - text: Shadow Dom
                - generic [ref=e188]: "3"
            - listitem [ref=e189]:
              - link "Storage 3" [ref=e190] [cursor=pointer]:
                - /url: /tags/storage/
                - text: Storage
                - generic [ref=e191]: "3"
            - listitem [ref=e192]:
              - link "Synchronization 12" [ref=e193] [cursor=pointer]:
                - /url: /tags/synchronization/
                - text: Synchronization
                - generic [ref=e194]: "12"
            - listitem [ref=e195]:
              - link "Table 1" [ref=e196] [cursor=pointer]:
                - /url: /tags/table/
                - text: Table
                - generic [ref=e197]: "1"
            - listitem [ref=e198]:
              - link "WebDriver 2" [ref=e199] [cursor=pointer]:
                - /url: /tags/webdriver/
                - text: WebDriver
                - generic [ref=e200]: "2"
        - generic [ref=e201]:
          - paragraph [ref=e202]: Categories
          - list [ref=e203]:
            - listitem [ref=e204]:
              - link "Advanced 11" [ref=e205] [cursor=pointer]:
                - /url: /categories/advanced/
                - text: Advanced
                - generic [ref=e206]: "11"
            - listitem [ref=e207]:
              - link "Basics 22" [ref=e208] [cursor=pointer]:
                - /url: /categories/basics/
                - text: Basics
                - generic [ref=e209]: "22"
            - listitem [ref=e210]:
              - link "Challenges 12" [ref=e211] [cursor=pointer]:
                - /url: /categories/challenges/
                - text: Challenges
                - generic [ref=e212]: "12"
            - listitem [ref=e213]:
              - link "Intermediate 17" [ref=e214] [cursor=pointer]:
                - /url: /categories/intermediate/
                - text: Intermediate
                - generic [ref=e215]: "17"
            - listitem [ref=e216]:
              - link "Micro App 24" [ref=e217] [cursor=pointer]:
                - /url: /categories/micro-app/
                - text: Micro App
                - generic [ref=e218]: "24"
            - listitem [ref=e219]:
              - link "Reference 6" [ref=e220] [cursor=pointer]:
                - /url: /categories/reference/
                - text: Reference
                - generic [ref=e221]: "6"
      - main [ref=e222]:
        - navigation "breadcrumb" [ref=e223]:
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "Apps" [ref=e226] [cursor=pointer]:
                - /url: /apps/
            - listitem [ref=e227]: / 7 Char Val
        - generic [ref=e228]:
          - heading "7 Char Val" [level=1] [ref=e229]
          - generic [ref=e230]:
            - generic [ref=e231]:
              - paragraph [ref=e232]: "Tags:"
              - list [ref=e233]:
                - listitem [ref=e234]:
                  - link "Exploratory Testing" [ref=e235] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/exploratory-testing/
                - listitem [ref=e236]:
                  - link "Interaction" [ref=e237] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/interaction/
                - listitem [ref=e238]:
                  - link "JavaScript" [ref=e239] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/javascript/
            - generic [ref=e240]:
              - paragraph [ref=e241]: "Categories:"
              - list [ref=e242]:
                - listitem [ref=e243]:
                  - link "Micro App" [ref=e244] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/categories/micro-app/
          - paragraph [ref=e246]: This is a simple JavaScript powered validation input. Only A-Z, a-z, 0-9, and * are valid characters.
          - separator [ref=e247]
          - generic [ref=e248]:
            - heading "Please Enter Your 7 character value" [level=2] [ref=e249]
            - paragraph [ref=e250]: Only A-Z, a-z, 0-9, and * are valid characters.
            - generic [ref=e251]:
              - paragraph [ref=e252]:
                - text: "Your 7 digits:"
                - textbox [ref=e253]: abc\tdef
                - textbox [ref=e254]: Valid Value
              - paragraph [ref=e255]:
                - button "Check Input" [active] [ref=e256] [cursor=pointer]
          - generic [ref=e257]:
            - separator [ref=e258]
            - generic [ref=e259]:
              - paragraph [ref=e260]:
                - link "7 Char Val - Instructions" [ref=e261] [cursor=pointer]:
                  - /url: /apps/7-char-val/7-char-val-instructions/
              - paragraph
    - contentinfo [ref=e262]:
      - generic [ref=e263]:
        - paragraph [ref=e264]:
          - text: Help keep this site free by joining our
          - link "Patreon Membership site" [ref=e265] [cursor=pointer]:
            - /url: https://patreon.com/eviltester
          - text: . Membership costs as little as $1 a month and includes access to exclusive
          - link "e-books and online training courses" [ref=e266] [cursor=pointer]:
            - /url: https://www.testerhq.com/
          - text: .
        - paragraph [ref=e267]:
          - text: If you'd like to see your advertising message here or learn about corporate sponsorship then
          - link "Contact Us" [ref=e268] [cursor=pointer]:
            - /url: https://linkedin.com/in/eviltester
          - text: .
      - generic [ref=e270]:
        - list [ref=e272]:
          - listitem "Twitter" [ref=e273]:
            - link "Twitter" [ref=e274] [cursor=pointer]:
              - /url: https://twitter.com/eviltester
              - generic [ref=e275]: 
          - listitem "LinkedIn" [ref=e276]:
            - link "LinkedIn" [ref=e277] [cursor=pointer]:
              - /url: https://linkedin.com/in/eviltester
              - generic [ref=e278]: 
        - list [ref=e280]:
          - listitem "GitHub" [ref=e281]:
            - link "GitHub" [ref=e282] [cursor=pointer]:
              - /url: https://github.com/eviltester
              - generic [ref=e283]: 
        - generic [ref=e284]:
          - generic [ref=e285]: © 2025–2026 Compendium Developments Ltd
          - link "Privacy Policy" [ref=e287] [cursor=pointer]:
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