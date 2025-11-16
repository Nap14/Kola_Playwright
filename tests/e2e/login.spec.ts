import { test, expect } from "@playwright/test";
import { LogInPage } from "../../app/pages/logIn.page";

test.describe("Login", () => {
  test("User can sign in", async ({ page }) => {
    const loginPage = new LogInPage(page);

    await loginPage.visit();

    await loginPage.signIn("nikolandre14@gmail.com", "12345678");

    await expect(page).toHaveURL("https://conduit.mate.academy");

    const profile = page.locator(".nav-link", {
      has: page.locator(".user-pic"),
    });
    await expect(profile).toBeVisible();
    await expect(profile).toContainText("nap1408");
  });
});
