import { APIRequestContext, expect } from '@playwright/test';

export class CustomerApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getCustomer(id: number) {
    const response = await this.request.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    expect(response.ok()).toBeTruthy();
    return response.json();
  }
}
