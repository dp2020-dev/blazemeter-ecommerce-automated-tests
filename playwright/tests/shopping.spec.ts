import { test, expect } from "@playwright/test";
import { cardPayment } from "../pages/creditCardPayment";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Online shopping", () => {
  test("Logged in user adds items to basket", async ({ page }) => {
    const paymentDetails = new cardPayment(page);
    await paymentDetails.initializeLocators();

    await page.waitForSelector("#carouselExampleIndicators", {
      state: "visible",
    });

    await page.getByRole("link", { name: "Iphone 6 32gb" }).click();
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("link", { name: "Add to cart" }).click();
    await page.getByRole("link", { name: "Home (current)" }).click();
    await page.locator("div:nth-child(8) > .card > a").click();
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("link", { name: "Add to cart" }).click();
    await page.getByRole("link", { name: "Home (current)" }).click();

    await page.getByRole("link", { name: "Cart", exact: true }).click();

    await page.getByRole("button", { name: "Place Order" }).click();
    await page.getByRole("heading", { name: "Place order" });

    await paymentDetails.enterUsername("Sidney Spendalot");
    await paymentDetails.enterCountry("UK");
    await paymentDetails.enterCity("Testville");
    await paymentDetails.enterCardDetails("112233665544");
    await paymentDetails.enterMonthAndYear("June", "2023");

    await page.getByRole("button", { name: "Purchase" }).click();
    await page
      .getByRole("heading", { name: "Thank you for your purchase!" })
      .click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.isVisible("text=' Product Store'");
  });

  //TODO close browser post test run
});
