import { test, expect, Page } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
});
test.describe("Demo Test", () => {
  test("Verify Login Error Message", async ({ page }) => {
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("notuser@demo.com");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("notPassword");
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("button", { name: "Log in" }).click();
  });
});
