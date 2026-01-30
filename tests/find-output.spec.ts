// tests/find-output.spec.ts
import { test, expect } from '@playwright/test';

test('Find the output area', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  await page.waitForTimeout(2000);
  
  // Type something
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await input.fill('mata dhaen slow gathiyak dhaenavaa.');
  await page.waitForTimeout(3000); // Wait for translation
  
  console.log('🔍 Looking for output...');
  
  // Check all textareas
  const allTextareas = await page.locator('textarea').all();
  console.log(`Found ${allTextareas.length} textareas total`);
  
  for (let i = 0; i < allTextareas.length; i++) {
    const value = await allTextareas[i].inputValue();
    const placeholder = await allTextareas[i].getAttribute('placeholder');
    const id = await allTextareas[i].getAttribute('id');
    
    console.log(`Textarea ${i}:`);
    console.log(`  Placeholder: "${placeholder}"`);
    console.log(`  ID: "${id}"`);
    console.log(`  Content: "${value?.substring(0, 50)}..."`);
    console.log(`  Has Sinhala: ${value?.includes('මට') ? '✅ YES' : '❌ NO'}`);
    console.log('---');
  }
  
  // Check all divs that might contain output
  const allDivsWithText = await page.locator('div').all();
  let outputDivs = 0;
  
  for (let i = 0; i < Math.min(allDivsWithText.length, 20); i++) {
    const text = await allDivsWithText[i].textContent();
    if (text && text.includes('මට') && text.length > 10) {
      console.log(`🎯 Found Sinhala in div ${i}: "${text.substring(0, 50)}..."`);
      outputDivs++;
    }
  }
  
  console.log(`Found ${outputDivs} divs with Sinhala text`);
  
  // Take screenshot
  await page.screenshot({ path: 'output-search.png' });
  console.log('📸 Screenshot: output-search.png');
});