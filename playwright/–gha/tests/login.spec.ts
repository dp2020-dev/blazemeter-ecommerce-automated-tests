import { test, expect, Page } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
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
    const userErrorText = "User does not exist."; //note- cannot verify this text, i.e. incorrect text still passes?

    await page.getByRole("link", { name: "Log in" }).click();
    //verify on Log In modal?
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("notuser@demo.com");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("notPassword");

    const locator = page.locator("#loginpassword");
    await expect(locator).toHaveValue("notPassword");

    const locatorUsername = page.locator("#loginusername");
    await expect(locatorUsername).toHaveValue("notuser@demo.com");

    await page.getByRole("button", { name: "Log in" }).click();

    page.on("dialog", async (alert) => {
      const text = alert.message();
      console.log(text);
      await expect(text).toMatch(userErrorText);
      await alert.accept(); //is this closing the alert?

      page.getByRole("link", { name: "Log in" }); // does this verify back log in page
    });
  });
});
