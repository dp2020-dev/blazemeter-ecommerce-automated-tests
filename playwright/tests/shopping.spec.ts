import { test, expect, Page } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test.describe("Online shopping", () => {
  test("Logged in user adds items to basket", async ({ page }) => {
    //log in
    //add products to basket via catalogue/shop page?
    await page.waitForSelector("#carouselExampleIndicators", {
      state: "visible",
    });

    // await page.locator("div:nth-child(5) > .card > a").click();
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

    const nextButton = await page.locator('button:has-text("Next")');
    await nextButton.click();

    await page.waitForSelector("#carouselExampleIndicators", {
      state: "visible",
    });
    await page.locator("div:nth-child(11");
    await page.getByRole("link", { name: "2017 Dell 15.6 Inch" }).click();
    // await page.locator("div:nth-child(13) > .card > a").click();
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("link", { name: "Add to cart" }).click();
    await page.getByRole("link", { name: "Cart", exact: true }).click();
  });

  //navigate to basket -basket page with methods
  //check no. & value of items
});
// });
