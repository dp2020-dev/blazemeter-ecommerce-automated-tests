import { test, expect, Page } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test.describe("Online shopping", () => {
  test("Logged in user adds items to basket", async ({ page }) => {
    //log in
    //add products to basket via catalogue/shop page?
    //navigate to basket -basket oage with methods
    //check no. & value of items
  });
});
