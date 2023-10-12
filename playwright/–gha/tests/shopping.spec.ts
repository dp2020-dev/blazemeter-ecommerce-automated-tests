import { test, expect, Page } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/index.html");
});
test.describe("Online shopping", () => {
  test("Logged in user adds items to basket", async ({ page }) => {
    await page.waitForSelector("#user-name", { state: "visible" });
    await page.locator('[data-test="username"]').type("example1@example.com");
    await page.locator('[data-test="password"]').type("examplepassword");
    await page.locator('[data-test="login-button"]').click();
    const errorMessage = await page
      .locator('[data-test="error"]')
      .textContent();
    console.log("Login Error Message: " + errorMessage);
    expect(errorMessage).toBe(
      "Epic sadface: Username and password do not match any user in this service"
    );
    page.close();
  });
});
