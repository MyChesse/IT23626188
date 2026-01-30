// tests/quick-verify.spec.ts
import { test, expect } from '@playwright/test';

test('Verify basic functionality', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  
  // 1. Find and type in the Singlish input
  const singlishInput = page.locator('textbox[placeholder="Input Your Singlish Text Here."]');
  await expect(singlishInput).toBeVisible();
  await singlishInput.fill('mata dhaen slow gathiyak dhaenavaa.');
  
  // 2. Wait for auto-translation or press Enter
  await page.waitForTimeout(2000);
  
  // 3. Look for any output area
  const allTextareas = await page.locator('textarea').all();
  console.log(`Found ${allTextareas.length} textareas`);
  
  // Take screenshot to see what happened
  await page.screenshot({ path: 'quick-test.png' });
  
  // 4. Try to find Clear button
  const clearButton = page.locator('button:has-text("Clear")').first();
  await expect(clearButton).toBeVisible();
});