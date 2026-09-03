import { test } from '../../fixtures/crm.fixture';
import { users } from '../../config/users';

test('valid CRM user can sign in @smoke', async ({ loginPage, dashboardPage }) => {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);
  await dashboardPage.expectLoaded();
});

test('invalid credentials are rejected @negative', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.standard.username, 'wrong-password');
  await loginPage.expectError('Username and password do not match');
});

test('locked user cannot access CRM @negative', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.locked.username, users.locked.password);
  await loginPage.expectError('locked out');
});
