# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **Playwright (TypeScript) UI/API test-automation practice suite**. There is no application server to run — the "application" is the Playwright test runner driving a headless Chromium browser against external practice websites. Node 22 and the Playwright Chromium browser + system libs are already provisioned by the update script.

### Running things
- Run tests: `npx playwright test` (or `npm test`). Config: `playwright.config.ts` (testDir = repo root, `*.spec.ts`, single `chromium` project, headless).
- Run one file/project: `npx playwright test <file>.spec.ts --project=chromium`.
- Typecheck: `npx tsc --noEmit` (or `npm run typecheck`).
- HTML report after a run: `npx playwright show-report`.

### Important caveats (non-obvious)
- **Most specs are incomplete/broken practice code — do NOT treat failures as environment problems.** Known issues in the committed code:
  - `CycloslLogin`, `Cyclos_Information`, `CyclosQRCode`, `AutomationPractice` specs import page objects from `../Cyclos_Pages/`, a directory that does not exist (the page-object `.ts` files live at the repo root instead). These fail to import / typecheck.
  - `09JanB_ExcelSheet` / `09JanC_dotenv` read `Test Data/ExcelSheet.xlsx` and a Windows path `C:/Playwright_Automation/.env` that are not in the repo — they error at collection time.
  - `09Jan_Jsondata` reads a local JSON file that isn't present.
  - `API_Automation.spec.ts` uses a placeholder auth token against a staging API and will not pass.
  - Do not "fix" these unless explicitly asked; they are the author's learning scratch files.
- **Reliable end-to-end demo:** `30DecB_PlaywrightFeatures.spec.ts` ("Features of Playwright") logs into the public OrangeHRM demo (`opensource-demo.orangehrmlive.com`, Admin/admin123) and is a good smoke test that real browser automation works.
- Tests hit **external public websites**, so they require internet egress and can be flaky if those sites change or throttle.
- Only Chromium is installed. If a spec imports/uses Firefox or WebKit, install it with `npx playwright install <browser>` first.
- The `xlsx` (SheetJS) dependency is only for the two Excel-driven specs above; it is installed from the npm registry.
