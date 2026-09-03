import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test('login page has no critical accessibility violations @a11y', async ({ page }) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  const criticalViolations = results.violations.filter(
    violation => violation.impact === 'critical'
  );

  expect(criticalViolations).toEqual([]);
});
