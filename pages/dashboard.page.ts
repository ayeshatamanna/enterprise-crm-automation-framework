import { expect, Page } from '@playwright/test';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async addFirstItem() {
    await this.page.locator('[data-test^="add-to-cart"]').first().click();
  }

  async expectCartCount(count: number) {
    await expect(this.page.getByTestId('shopping-cart-badge')).toHaveText(String(count));
  }

  async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }

  async expectCartPage() {
    await expect(this.page.getByText('Your Cart')).toBeVisible();
  }
}
