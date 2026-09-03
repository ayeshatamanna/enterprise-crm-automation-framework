import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { CustomerApiClient } from '../api/customer.client';

type CrmFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  customerApi: CustomerApiClient;
};

export const test = base.extend<CrmFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  customerApi: async ({ request }, use) => {
    await use(new CustomerApiClient(request));
  }
});

export { expect } from '@playwright/test';
