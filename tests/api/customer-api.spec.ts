import { test, expect } from '../../fixtures/crm.fixture';

test('customer API returns expected CRM-style customer data @api', async ({
  customerApi
}) => {
  const customer = await customerApi.getCustomer(1);

  expect(customer).toMatchObject({
    id: 1,
    name: expect.any(String),
    email: expect.any(String)
  });
});
