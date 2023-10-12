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
    this.welcomeLink = this.page.locator('a:has-text("Welcome test")');
  }

  async clickLoginLink() {
    await this.loginLink.click();
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

  async clickWelcomeLink() {
    await this.welcomeLink.click();
  }
}
