import { Page, Locator } from "playwright";

export class login {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private loginLink: Locator;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private welcomeLink: Locator;

  async initializeLocators() {
    this.loginLink = this.page.locator('a:has-text("Log in")');
    this.usernameInput = this.page.locator("#loginusername");
    this.passwordInput = this.page.locator("#loginpassword");
    this.loginButton = this.page.locator('button:has-text("Log in")');
  }

  async loginFunction(username, password) {
    await this.loginLink.click();
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.usernameInput.press("Tab");
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async enterUsername(username: string) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.usernameInput.press("Tab");
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
