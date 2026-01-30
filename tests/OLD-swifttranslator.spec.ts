// tests/swifttranslator.spec.ts
import { test, expect } from '@playwright/test';
import { ConverterPage } from './page-objects/converter-page';
import { testCases } from './test-data/test-cases';

test.describe('SwiftTranslator.com - Functional Tests', () => {
  let converterPage: ConverterPage;

  test.beforeEach(async ({ page }) => {
    converterPage = new ConverterPage(page);
    await converterPage.goto();
    // Ensure we're in Singlish mode
    await converterPage.setSinglishMode();
  });

  // Test Positive Cases
  testCases
    .filter(tc => tc.id.startsWith('Pos_Fun'))
    .forEach(testCase => {
      test(`POSITIVE: ${testCase.id} - ${testCase.name}`, async () => {
        console.log(`Testing: ${testCase.id} - ${testCase.name}`);
        
        const output = await converterPage.translateSinglishToSinhala(testCase.input);
        
        // For passing tests, expect output to match
        if (testCase.status === 'Pass' || testCase.status === 'PASS') {
          expect(output).toContain(testCase.expected);
        }
      });
    });

  // Test Negative Cases - expecting failures or partial matches
  testCases
    .filter(tc => tc.id.startsWith('Neg_Fun'))
    .forEach(testCase => {
      test(`NEGATIVE: ${testCase.id} - ${testCase.name}`, async () => {
        console.log(`Testing: ${testCase.id} - ${testCase.name}`);
        
        const output = await converterPage.translateSinglishToSinhala(testCase.input);
        
        // For negative tests, check specific failure conditions
        switch(testCase.id) {
          case 'Neg_Fun_0001': // Extreme concatenation
            // Should not return the same concatenated string
            expect(output).not.toBe(testCase.input);
            break;
          case 'Neg_Fun_0002': // Mixed case
            // Should handle or normalize mixed case
            expect(output.toLowerCase()).not.toContain('ගෙඩ්හrඅ');
            break;
          // Add other negative test validations as needed
        }
      });
    });
});

test.describe('SwiftTranslator.com - UI Tests', () => {
  let converterPage: ConverterPage;

  test.beforeEach(async ({ page }) => {
    converterPage = new ConverterPage(page);
    await converterPage.goto();
    await converterPage.setSinglishMode();
  });

  test('UI: Real-time typing updates (Pos_UI_0001)', async () => {
    const testText = "kohomadha";
    
    for (let i = 1; i <= testText.length; i++) {
      const partialText = testText.substring(0, i);
      await converterPage.enterSinglishText(partialText);
      // Check if output updates in real-time (if the site supports it)
      const output = await converterPage.getSinhalaOutput();
      expect(output).toBeTruthy();
    }
  });

  test('UI: Mode switching works correctly', async () => {
    // Test Singlish → Sinhala mode
    await converterPage.setSinglishMode();
    await converterPage.enterSinglishText("mama gedhara yanavaa");
    await converterPage.translate();
    const sinhalaOutput = await converterPage.getSinhalaOutput();
    expect(sinhalaOutput).toBeTruthy();
    
    // Test switching to English mode
    await converterPage.switchLanguage();
    // Add verification for English translation
  });
});