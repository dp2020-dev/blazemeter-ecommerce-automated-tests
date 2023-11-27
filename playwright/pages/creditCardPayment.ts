import { Page, Locator } from "playwright";

export class cardPayment {
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
    this.creditCard = this.page.locator("#card");
    this.month = this.page.locator("#month");
    this.year = this.page.locator("#year");
  }

  async enterUsername(username: string) {
    await this.customerName.click();
    await this.customerName.fill(username);
    await this.customerName.press("Tab");
  }

  async enterCountry(country: string) {
    await this.country.click();
    await this.country.fill(country);
    await this.country.press("Tab");
  }

  async enterCity(city: string) {
    await this.city.click();
    await this.city.fill(city);
    await this.city.press("Tab");
  }

  async enterCardDetails(card: string) {
    await this.creditCard.click();
    await this.creditCard.fill(card);
    await this.creditCard.press("Tab");
  }

  async enterMonthAndYear(month: string, year: string) {
    await this.month.click();
    await this.month.fill(month);
    await this.month.press("Tab");
    await this.year.click();
    await this.year.fill(year);
    await this.year.press("Tab");
  }

  // async enterPassword(password: string) {
  //   await this.passwordInput.fill(password);
  // }

  // async clickLoginButton() {
  //   await this.loginButton.click();
  // }
}
