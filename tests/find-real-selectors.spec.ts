// tests/find-real-selectors.spec.ts
import { test, expect } from '@playwright/test';

test('Discover actual website structure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  
  console.log('🔍 Finding ALL interactive elements...');
  
  // 1. Find ALL textareas
  const textareas = await page.locator('textarea').all();
  console.log(`📝 Found ${textareas.length} textareas:`);
  for (let i = 0; i < textareas.length; i++) {
    const placeholder = await textareas[i].getAttribute('placeholder');
    const id = await textareas[i].getAttribute('id');
    const classes = await textareas[i].getAttribute('class');
    console.log(`  Textarea ${i}: placeholder="${placeholder}", id="${id}", classes="${classes}"`);
  }
  
  // 2. Find ALL inputs
  const inputs = await page.locator('input').all();
  console.log(`⌨️ Found ${inputs.length} inputs:`);
  for (let i = 0; i < inputs.length; i++) {
    const type = await inputs[i].getAttribute('type');
    const placeholder = await inputs[i].getAttribute('placeholder');
    console.log(`  Input ${i}: type="${type}", placeholder="${placeholder}"`);
  }
  
  // 3. Find contenteditable divs
  const editableDivs = await page.locator('[contenteditable="true"]').all();
  console.log(`✏️ Found ${editableDivs.length} contenteditable divs`);
  
  // 4. Try to type in the FIRST textarea
  if (textareas.length > 0) {
    await textareas[0].fill('testing 123');
    const value = await textareas[0].inputValue();
    console.log(`✅ Typed in first textarea: "${value}"`);
    
    // Wait to see if translation happens
    await page.waitForTimeout(2000);
    
    // Check if other textareas now have content
    for (let i = 0; i < textareas.length; i++) {
      const content = await textareas[i].inputValue();
      if (content && content !== 'testing 123') {
        console.log(`🎯 Textarea ${i} has different content: "${content}" - THIS MIGHT BE THE OUTPUT!`);
      }
    }
  }
  
  // 5. Take screenshot
  await page.screenshot({ path: 'real-structure.png' });
  console.log('📸 Screenshot saved as real-structure.png');
});