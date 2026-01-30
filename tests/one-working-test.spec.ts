// tests/one-working-test.spec.ts
import { test, expect } from '@playwright/test';

test('Single working test to understand the site', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  
  // SIMPLE APPROACH: Just try to interact with the page
  console.log('1. Page loaded, trying to click...');
  
  // Click somewhere in the middle of the page (where input likely is)
  await page.mouse.click(400, 300);
  await page.waitForTimeout(1000);
  
  // Type test text
  console.log('2. Typing test text...');
  await page.keyboard.type('mata dhaen slow gathiyak dhaenavaa.');
  await page.waitForTimeout(3000);
  
  // Take screenshot
  await page.screenshot({ path: 'current-state.png' });
  console.log('3. Screenshot saved: current-state.png');
  
  // Look for ANY text on the page
  const allText = await page.textContent('body');
  console.log('4. Page contains Sinhala?:', allText?.includes('මට'));
  
  // Get ALL HTML to analyze
  const html = await page.content();
  // Save HTML to file
  await page.evaluate(() => {
    const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'page-source.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  
  console.log('5. HTML source downloaded as page-source.html');
  console.log('✅ Open page-source.html in browser to see the REAL structure');
});