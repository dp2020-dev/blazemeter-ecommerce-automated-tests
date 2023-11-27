import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Online shopping", () => {
  test("Logged in user adds items to basket", async ({ page }) => {
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

    await page.locator("#name").fill("Sid Spendalot");
    await page.locator("#name").press("Tab");

    await page.locator("#country").fill("UK");
    await page.locator("#country").press("Tab");

    await page.locator("#city").fill("Test Town");
    await page.locator("#city").press("Tab");

    await page.locator("#card").fill("665544332211");
    await page.locator("#card").press("Tab");

    await page.locator("#month").fill("June");
    await page.locator("#month").press("Tab");

    await page.locator("#year").fill("2026");
    await page.locator("#year").press("Tab");

    await page.getByRole("button", { name: "Purchase" }).click();
    await page
      .getByRole("heading", { name: "Thank you for your purchase!" })
      .click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.isVisible("text=' Product Store'");
  });

  //TODO close broser post test run
});
