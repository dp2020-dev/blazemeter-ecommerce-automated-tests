import { Page, Locator } from "playwright";

export class purchase {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private header: Locator;
  private customerName: Locator;
  private country: Locator;
  private city: Locator;
  private creditCard: Locator;
  private month: Locator;
  private year: Locator;
  private purchaseButton: Locator;

  async initializeLocators() {
    this.header = this.page.locator("#Products");

    this.customerName = this.page.locator("#name");
    this.country = this.page.locator("#country");
    this.city = this.page.locator("#city");
  }

  // async loginFunction(customerName, country) {
  //   // await this.loginLink.click();
  //   await this.customerName.click();
  //   await this.customerName.fill(username);
  //   await this.customerName.press("Tab");
  //   await this.country.fill(country);
  //   await this.loginButton.click();
  // }

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
