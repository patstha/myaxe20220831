import { test, expect } from '@playwright/test';

test('check page title and url port number test', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MyAngularAxe/);

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*4200/);
});
