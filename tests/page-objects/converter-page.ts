// tests/page-objects/converter-page.ts
import { Page, Locator } from '@playwright/test';

export class ConverterPage {
  readonly page: Page;
  
  // CORRECT SELECTORS BASED ON YOUR FINDINGS:
  readonly singlishInput: Locator;
  readonly sinhalaOutput: Locator; // We'll find this next
  
  // BUTTONS (from your earlier snapshot):
  readonly clearButton: Locator;
  readonly swapButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // ✅ CORRECT: Textarea with specific placeholder
    this.singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // ❓ OUTPUT: We need to find this. Let's target the second textarea or nearby element
    // First, let's try to find it by position relative to input
    this.sinhalaOutput = page.locator('textarea').nth(1); // Second textarea
    
    // ✅ BUTTONS from your snapshot
    this.clearButton = page.locator('button:has-text("Clear")');
    this.swapButton = page.locator('button:has-text("Swap Languages"), button[aria-label*="Swap"]');
  }

  async goto() {
    await this.page.goto('https://www.swifttranslator.com');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000); // Extra wait for UI
  }

  async enterSinglishText(text: string) {
    await this.singlishInput.fill('');
    await this.singlishInput.fill(text);
    // Site might auto-translate, wait a bit
    await this.page.waitForTimeout(1500);
  }

  async translate() {
    // Since we don't have a translate button yet, let's try Enter
    await this.singlishInput.press('Enter');
    await this.page.waitForTimeout(2000);
  }

  async getSinhalaOutput(): Promise<string> {
    // Try multiple ways to get output
    try {
      // Method 1: Try second textarea
      const secondTextarea = this.page.locator('textarea').nth(1);
      const count = await secondTextarea.count();
      
      if (count > 0) {
        const text = await secondTextarea.inputValue();
        if (text && text.trim()) return text;
      }
      
      // Method 2: Look for elements with Sinhala text
      const sinhalaElements = this.page.locator('text=මට,text=දැන්,text=ගතියක්');
      const sinhalaCount = await sinhalaElements.count();
      
      if (sinhalaCount > 0) {
        // Get the element that's not the input
        for (let i = 0; i < sinhalaCount; i++) {
          const element = sinhalaElements.nth(i);
          const text = await element.textContent();
          if (text && text.includes('මට') && text !== 'මට') {
            return text;
          }
        }
      }
      
      // Method 3: Get all textareas and find the one with content
      const allTextareas = await this.page.locator('textarea').all();
      for (const textarea of allTextareas) {
        const value = await textarea.inputValue();
        if (value && value !== '' && !value.includes('testing') && !value.includes('Input Your')) {
          return value;
        }
      }
      
      return ''; // No output found
    } catch (error) {
      console.log('Error getting output:', error);
      return '';
    }
  }

  async clearInput() {
    await this.clearButton.click();
    await this.page.waitForTimeout(500);
  }

  // Combined method for testing
  async translateSinglishToSinhala(singlishText: string): Promise<string> {
    await this.enterSinglishText(singlishText);
    await this.translate();
    return await this.getSinhalaOutput();
  }
}