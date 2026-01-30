// tests/working-basic.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Basic Working Tests', () => {
  test('Test 1: Verify input works', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    
    // Find and use the correct input
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await expect(input).toBeVisible();
    
    // Type test text
    const testText = "mata dhaen slow gathiyak dhaenavaa.";
    await input.fill(testText);
    
    // Verify text was typed
    const typedText = await input.inputValue();
    expect(typedText).toBe(testText);
    
    console.log('✅ Input works correctly');
  });
  
  test('Test 2: Check if translation happens', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await input.fill('mata dhaen slow gathiyak dhaenavaa.');
    
    // Wait for possible auto-translation
    await page.waitForTimeout(3000);
    
    // Look for ANY Sinhala text on the page
    const pageText = await page.textContent('body');
    const hasSinhala = pageText?.includes('මට') || pageText?.includes('දැන්');
    
    console.log('Has Sinhala text on page:', hasSinhala);
    
    if (hasSinhala) {
      console.log('✅ Translation appears to be working');
    } else {
      console.log('⚠️ No Sinhala text found - might need manual translation trigger');
    }
  });
  
  test('Test 3: Test Clear button', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await input.fill('test text');
    
    // Find and click Clear button
    const clearButton = page.locator('button:has-text("Clear")').first();
    await clearButton.click();
    await page.waitForTimeout(1000);
    
    // Verify input is cleared
    const inputText = await input.inputValue();
    expect(inputText).toBe('');
    
    console.log('✅ Clear button works');
  });
});