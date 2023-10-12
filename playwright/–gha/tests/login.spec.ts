import { test, expect, Page } from "@playwright/test";
import { login } from "../../pages/login.page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.demoblaze.com");
});

test.describe("Log in tests", () => {
  test("Succesful log in", async ({ page }) => {
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("test");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("test");
    await page.getByRole("button", { name: "Log in" }).click();

    await page.getByRole("link", { name: "Welcome test" }).click();
  });

  test("Verify Login Error Message", async ({ page }) => {
    //this test does not work- does not verify alert message?
    page.on("dialog", async (d) => {
      expect(d.type()).toContain("alert");
      expect(d.message()).toContain("Loser");
      await d.accept();
    });

    await page.getByRole("link", { name: "Log in" }).click();
    await expect(page.locator("#logInModalLabel")).toBeVisible();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("notuser@demo.com");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("notPassword");

    const locator = page.locator("#loginpassword");
    await expect(locator).toHaveValue("notPassword");

    const locatorUsername = page.locator("#loginusername");
    await expect(locatorUsername).toHaveValue("notuser@demo.com");

    await page.getByRole("button", { name: "Log in" }).click();
  });

  test("Verify Blank Login Error Message", async ({ page }) => {
    page.on("dialog", async (d) => {
      expect(d.type()).toContain("alert");
      expect(d.message()).toContain("Please fill out Username and Password.");
      await d.accept();
    });
    await page.getByRole("link", { name: "Log in" }).click();
    await expect(page.locator("#logInModalLabel")).toBeVisible();
    await page.getByRole("button", { name: "Log in" }).click();
  });

  test("Successful log in using POM", async ({ page }) => {
    const loginPage = new login(page);
    await loginPage.initializeLocators();

    await loginPage.clickLoginLink();
    await loginPage.enterUsername("test");
    await loginPage.enterPassword("test");
    await loginPage.clickLoginButton();
    await loginPage.clickWelcomeLink();

    // Add assertions as needed to verify the test result
    // For example, you can use Playwright's `expect` functions.
    // For instance, expect(await page.locator('h1:has-text("Welcome test")')).toHaveText('Welcome test');
  });
});
