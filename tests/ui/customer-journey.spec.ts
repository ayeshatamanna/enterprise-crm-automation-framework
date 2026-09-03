import { test } from '../../fixtures/crm.fixture';
import { users } from '../../config/users';

test('sales user completes a simplified customer journey @smoke', async ({
  loginPage,
  dashboardPage
}) => {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);

  await dashboardPage.expectLoaded();
  await dashboardPage.addFirstItem();
  await dashboardPage.expectCartCount(1);
  await dashboardPage.openCart();
  await dashboardPage.expectCartPage();
});
