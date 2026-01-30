// tests/working-tests.spec.ts
import { test, expect } from '@playwright/test';

test('Test translation using keyboard navigation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  
  // Wait for page to load
  await page.waitForTimeout(2000);
  
  // Press Tab multiple times to focus the input
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  
  // Type test text
  const testText = "mata dhaen slow gathiyak dhaenavaa.";
  await page.keyboard.type(testText);
  await page.waitForTimeout(3000); // Wait for translation
  
  // Press Tab to move to output
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  
  // Select all and copy
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');
  
  // Get clipboard content
  const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
  console.log('📋 Clipboard content:', clipboardText);
  
  // Take screenshot
  await page.screenshot({ path: 'keyboard-test-result.png' });
  
  // Check if we got Sinhala output
  if (clipboardText.includes('මට') || clipboardText.includes('දැන්')) {
    console.log('✅ SUCCESS: Got Sinhala translation!');
    console.log('Translated text:', clipboardText);
  }
});

test('Find elements by trial and error', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  
  // Try ALL possible selectors one by one
  const possibleSelectors = [
    'textarea',
    'input',
    '[contenteditable="true"]',
    '.editor',
    '.input',
    '.text-area',
    '#input',
    '#text',
    'div[role="textbox"]',
    'div[class*="input"]',
    'div[class*="editor"]',
    'div[class*="text"]'
  ];
  
  for (const selector of possibleSelectors) {
    const count = await page.locator(selector).count();
    if (count > 0) {
      console.log(`🔎 Testing selector: "${selector}" (found ${count})`);
      
      try {
        const element = page.locator(selector).first();
        await element.fill('test');
        const value = await element.inputValue();
        if (value === 'test') {
          console.log(`🎉 FOUND WORKING SELECTOR: "${selector}"`);
          break;
        }
      } catch (error) {
        console.log(`  ❌ Selector "${selector}" didn't work`);
      }
    }
  }
});