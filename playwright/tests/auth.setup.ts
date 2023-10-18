import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

import { login } from "../pages/login.page";

setup('authenticate', async ({ page }) => {
  await page.goto("/");


    const loginPage = new login(page);
    await loginPage.initializeLocators();
    
    await loginPage.loginFunction("test", "test");

    await expect(
      page.getByRole("link", { name: "Welcome test" })
    ).toBeVisible();

    // End of authentication steps.

    await page.context().storageState({ path: authFile });
  });
