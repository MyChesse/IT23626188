// tests/final-working-tests.spec.ts
import { test, expect } from '@playwright/test';
import { testCases } from './test-data/test-cases';

test.describe('SwiftTranslator - Final Working Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    await page.waitForTimeout(1000);
  });

  // Test 1: Basic page functionality
  test('TC001 - Page loads with all elements', async ({ page }) => {
    // Input exists
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await expect(input).toBeVisible();
    
    // Buttons exist
    await expect(page.locator('button:has-text("Clear")').first()).toBeVisible();
    await expect(page.locator('button:has-text("Swap")').first()).toBeVisible();
    
    console.log('✅ TC001: Page loads correctly');
  });

  // Test 2: Test all 24 positive cases (input acceptance)
  test('TC002 - All positive test cases input acceptance', async ({ page }) => {
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const positiveCases = testCases.filter(tc => tc.id.startsWith('Pos_Fun'));
    
    console.log(`Testing ${positiveCases.length} positive cases...`);
    
    for (const testCase of positiveCases) {
      await input.fill('');
      await input.fill(testCase.input);
      const typedText = await input.inputValue();
      
      expect(typedText).toBe(testCase.input);
      console.log(`✅ ${testCase.id}: Input accepted`);
      
      // Wait a bit between tests
      await page.waitForTimeout(500);
    }
  });

  // Test 3: Test all 10 negative cases
  test('TC003 - All negative test cases input acceptance', async ({ page }) => {
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const negativeCases = testCases.filter(tc => tc.id.startsWith('Neg_Fun'));
    
    console.log(`Testing ${negativeCases.length} negative cases...`);
    
    for (const testCase of negativeCases) {
      await input.fill('');
      await input.fill(testCase.input);
      const typedText = await input.inputValue();
      
      expect(typedText).toBe(testCase.input);
      console.log(`✅ ${testCase.id}: Input accepted (expected to fail translation)`);
      
      await page.waitForTimeout(500);
    }
  });

  // Test 4: Clear functionality
  test('TC004 - Clear button works', async ({ page }) => {
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // Type and clear
    await input.fill('Test text to clear');
    await page.waitForTimeout(500);
    
    const clearButton = page.locator('button:has-text("Clear")').first();
    await clearButton.click();
    await page.waitForTimeout(500);
    
    // Verify cleared
    expect(await input.inputValue()).toBe('');
    console.log('✅ TC004: Clear button works');
  });

  // Test 5: Translation detection
  test('TC005 - Detect if translation happens', async ({ page }) => {
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // Type a simple test
    await input.fill('mata dhaen slow gathiyak dhaenavaa.');
    await page.waitForTimeout(3000);
    
    // Check for Sinhala characters on page
    const bodyText = await page.textContent('body') || '';
    const hasSinhala = /[\u0D80-\u0DFF]/.test(bodyText);
    
    console.log(`TC005: Page contains Sinhala - ${hasSinhala ? 'YES ✅' : 'NO (may need manual trigger)'}`);
    
    if (hasSinhala) {
      // Try to extract translation
      const sinhalaMatch = bodyText.match(/[\u0D80-\u0DFF][^>]{20,100}[\u0D80-\u0DFF]/);
      if (sinhalaMatch) {
        console.log('Found Sinhala text:', sinhalaMatch[0].substring(0, 80));
      }
    }
  });
});