import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/auth/login');
  }

  async login(username: string, password: string) {
    // await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    // await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    // await this.page.getByRole('button', { name: 'Login' }).click();
     await this.page.getByRole('button', { name: 'Login' }).click();
  await this.page.getByRole('textbox', { name: 'Email' }).click();
  await this.page.getByRole('textbox', { name: 'Email' }).fill('mekinjemal999@gmail.com');
  await this.page.getByRole('textbox', { name: 'Password' }).click();
  await this.page.getByRole('textbox', { name: 'Password' }).fill('@Mekin0828');
  await this.page.getByRole('button', { name: 'Login' }).click();
  await this.page.locator('#otp-input-0').fill('1');
  await this.page.locator('#otp-input-1').fill('1');
  await this.page.locator('#otp-input-2').fill('1');
  await this.page.locator('#otp-input-3').fill('1');

  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}
