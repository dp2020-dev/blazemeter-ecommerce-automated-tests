import { test, expect, Page } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
});
test.describe('Demo Test', () => {
    test('Verify Login Error Message', async ({ page }) => {
      //wait for log in button to load
      //click log in
      //input username and password
      //click Log in btn
      //verify error pop up
        (await page.waitForSelector('#Log in',{state:'visible'})).click();
        
        await page.locator('[data-test="username"]').type('example1@example.com');
        await page.locator('[data-test="password"]').type('examplepassword');
        await page.locator('[data-test="Log in"]').click();
        const errorMessage = await page.locator('[data-test="error"]').textContent();
        console.log("Login Error Message: "+errorMessage);
        expect(errorMessage).toBe('Wrong password.');
        page.close();
    });
});
