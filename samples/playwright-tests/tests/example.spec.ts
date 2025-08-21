
// npm init playwright@latest 
//chooose typescript
// npx playwright test
// Let's go nuts and bump up workers
// npx playwright test - workers=20
// With Azure PlayWright 
// npx playwright test - workers=40 --config=../playwright.service.config.ts


import { test, expect } from '@playwright/test';

// This sample simulates a larger test suite
for (var i = 0; i < 1000; i++) {

  test('test ' + i, async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
}
