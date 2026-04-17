
# 🎭 Playwright Record & Play Tutorial: SevenCharValidator

Welcome to the Playwright testing tutorial for the [**SevenCharValidator**](https://testpages.eviltester.com/apps/7-char-val/) micro app! This repository demonstrates how to set up Playwright, record test scripts, run them with HTML reporting, debug using trace viewers, and scale your tests from a simple recorded script to data-driven, parallel execution.

## 📂 Project Structure & Files Explanation

Here is an overview of the files included in this repository and what they do:

### Core Files
* **`package.json` & `package-lock.json`**: Standard Node.js configuration files managing project dependencies (like Playwright).
* **`node_modules/`**: Directory containing all installed NPM packages.

### Test Data
* **`AIGenratedTestcases.md`**: Markdown documentation containing the brainstormed/AI-generated test cases.
* **`testcases.json`**: An automated JSON object containing our test data. Used in versions 2 and 3 of our tests to loop through various scenarios dynamically.

### Test Scripts
* **`sevenCharVal_test.spec.ts` (v1)**: The simple, basic recorded steps generated directly from Playwright's Codegen tool.
* **`sevenCharVal_v2_test.spec.ts` (v2)**: Advanced script using the recorded steps to dynamically loop through all test cases provided in `testcases.json`.
* **`sevenCharVal_v3_test.spec.ts` (v3)**: Highly optimized script that utilizes Playwright's **parallel execution** to loop through the generated test cases simultaneously, speeding up the test run.

### Reports & Results
* **`test-results/sevenCharVal_test-test/trace.zip`**: Contains the trace file (video, DOM snapshots, network requests) for debugging recorded steps.
* **`playwright-report/index.html`**: The HTML test report generated from running the v1 script (`sevenCharVal_test.spec.ts`).
* **`playwright-report_v2/index.html`**: The custom HTML test report generated from the v2 script.
* **`playwright-report_v3/index.html`**: The custom HTML test report generated from the v3 parallel script.

---

## 🚀 Step 1: Project Setup

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed. Run the following commands in your terminal to initialize the project and install Playwright.

```bash
# Initialize a new Node.js project
npm init -y

# Install Playwright Test runner as a dev dependency
npm install -D @playwright/test

# Install supported browsers (Chromium, Firefox, WebKit)
npx playwright install
```

---

## 🎥 Step 2: Record a Test Session (Codegen)

Playwright can generate test code for you by recording your browser actions. 

Run the following command, replacing `<urllink>` with the actual URL of the SevenCharValidator micro app:

```bash
npx playwright codegen <urllink> -o sevenCharVal_test.spec.ts
```
* **`-o <filename>`**: Tells Playwright to output the generated code directly into a specific file.

---

## 🏃 Step 3: Running Tests & Generating Reports

### Basic Execution
To run your test in headless mode (background):
```bash
npx playwright test sevenCharVal_test.spec.ts
```

### Visual Execution (Headed Mode)
To actually see the browser opening and clicking through the steps:
```bash
npx playwright test sevenCharVal_test.spec.ts --headed
```

### Generating an HTML Report
To create a detailed HTML report of your test run:
```bash
npx playwright test sevenCharVal_test.spec.ts --reporter=html
```

### Custom Report Folders (For V2 and V3)
By default, reports go to `playwright-report/`. If you want to run your v2 or v3 scripts and save their reports in separate folders (e.g., `playwright-report_v2`), use the environment variable command (PowerShell example):

```powershell
# Set custom output directory and run the test
$env:PLAYWRIGHT_HTML_OUTPUT_DIR="playwright-report_v2"; npx playwright test sevenCharVal_v2_test.spec.ts --reporter=html
```

### Viewing the Report
To open the standard default report:
```bash
npx playwright show-report
```
To open a custom folder report (e.g., v2):
```bash
npx playwright show-report playwright-report_v2
```

---

## 🐛 Step 4: Debugging with Traces (Video & Playback)

When a test fails (or you want to verify a bug test case), you can record a "trace". A trace captures a video, network requests, console logs, and a step-by-step DOM snapshot.

### Generate a Trace
Run your test with the `--trace on` flag:
```bash
npx playwright test sevenCharVal_test.spec.ts --trace on 
```
*This will generate a zip file inside the `test-results/` folder.*

### View the Trace
There are two ways to view the captured trace:

**Option 1: View Locally via Command Line**
```bash
npx playwright show-trace test-results/sevenCharVal_test-test/trace.zip
```

**Option 2: View Online in the Browser**
1. Open [https://trace.playwright.dev/](https://trace.playwright.dev/)
2. Drag and drop your `trace.zip` file directly into the webpage.



## 🔄 Step 5: Git Commands & Workflow

This part contains the commands used to initialize the local project as a Git repository, connect it to GitHub, and push code updates.

### 1. First-Time Setup

**Create New Repository on Github**
1. Click "New Repository" on GitHub  
2. Create <Folder_name>. This created an empty "remote" folder on GitHub's servers.

**Run these commands in your terminal one by one. Make sure you are inside your project's root folder:**

```bash
# 1. Initialize the local directory as a new Git repository
git init

# 2. Add all your project files to the Git staging area
git add .

# 3. Commit the files you've added with a descriptive message
git commit -m "Initial commit - Playwright Setup & Readme"

# 4. Rename the default branch to 'main' (Standard GitHub practice)
git branch -M main

# 5. Connect your local repository to your remote GitHub repository
git remote add origin https://github.com/yekoshy/Playwright_Record-n-Play.git

# 6. Push the changes from your local repository to GitHub (-u sets the upstream link)
git push -u origin main