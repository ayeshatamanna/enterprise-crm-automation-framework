import { faker } from '@faker-js/faker';

export type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

export function buildCustomer(overrides: Partial<Customer> = {}): Customer {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    ...overrides
  };
}
