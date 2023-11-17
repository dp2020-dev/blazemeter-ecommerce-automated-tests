import { test, expect, Page } from "@playwright/test";
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

    const nextButton = await page.$('button.page-link[value="9"]');
    if (nextButton) {
      await nextButton.click();
    } else {
      await page.locator("#next2").click();
    }

    // await page.waitForSelector("#carouselExampleIndicators", {
    //   state: "visible",
    // });
    await page.locator("div:nth-child(11");
    await page.getByRole("link", { name: "2017 Dell 15.6 Inch" }).click();

    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("link", { name: "Add to cart" }).click();
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
});
