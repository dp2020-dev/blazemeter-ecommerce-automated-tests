import { test, expect, Page } from "@playwright/test";
const authFile = "playwright/.auth/user.json";

import { login } from "../pages/login.page";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Log in tests", () => {
  test("Successful log", async ({ page }) => {
    const loginPage = new login(page);
    await loginPage.initializeLocators();
    
    await loginPage.loginFunction("test", "test");

    await expect(
      page.getByRole("link", { name: "Welcome test" })
    ).toBeVisible();

    // End of authentication steps.

    await page.context().storageState({ path: authFile });
  });

  test("Verify Login error message for incorrect user/password", async ({
    page,
  }) => {
    page.on("dialog", async (d) => {
      expect(d.type()).toContain("alert");
      expect(d.message()).toContain("User does not exist.");
      await d.accept();
    });

    const loginPage = new login(page);
    await loginPage.initializeLocators();

    await loginPage.loginFunction("notuser@demo.com", "notPassword");

    const locatorUsername = page.locator("#loginusername");
    await expect(locatorUsername).toHaveValue("notuser@demo.com");

    const locator = page.locator("#loginpassword");
    await expect(locator).toHaveValue("notPassword");

    await page.getByRole("button", { name: "Log in" }).click();
  });

  test("Verify blank Login error message", async ({ page }) => {
    page.on("dialog", async (d) => {
      expect(d.type()).toContain("alert");
      expect(d.message()).toContain("Please fill out Username and Password.");
      await d.accept();
    });
    await page.getByRole("link", { name: "Log in" }).click();
    await expect(page.locator("#logInModalLabel")).toBeVisible();
    await page.getByRole("button", { name: "Log in" }).click();
  });
});
