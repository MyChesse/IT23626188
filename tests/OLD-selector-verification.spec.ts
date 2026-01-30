// tests/selector-verification.spec.ts
import { test, expect } from '@playwright/test';
import { ConverterPage } from './page-objects/converter-page';

test.describe('Selector Verification for SwiftTranslator.com', () => {
  let converterPage: ConverterPage;

  test.beforeEach(async ({ page }) => {
    converterPage = new ConverterPage(page);
    await converterPage.goto();
  });

  test('Verify all critical elements exist', async () => {
    // Check if input fields exist
    await expect(converterPage.singlishInput).toBeVisible();
    
    // Check if output areas exist
    await expect(converterPage.sinhalaOutput).toBeVisible();
    
    // Check if buttons exist
    await expect(converterPage.translateButton).toBeVisible();
    await expect(converterPage.switchLanguageButton).toBeVisible();
    
    // Check mode buttons
    await expect(converterPage.singlishModeButton).toBeVisible();
    await expect(converterPage.sinhalaModeButton).toBeVisible();
    await expect(converterPage.englishModeButton).toBeVisible();
    
    console.log('✅ All critical elements found on the page');
  });

  test('Test basic translation functionality', async () => {
    const testInput = "mata dhaen slow gathiyak dhaenavaa.";
    
    await converterPage.enterSinglishText(testInput);
    await converterPage.translate();
    
    const output = await converterPage.getSinhalaOutput();
    console.log(`Input: ${testInput}`);
    console.log(`Output: ${output}`);
    
    expect(output).toBeTruthy();
  });
});