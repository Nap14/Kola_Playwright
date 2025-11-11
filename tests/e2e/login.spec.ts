import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("User can sign in", async ({ page }) => {
    await page.goto("https://conduit.mate.academy/user/login");

    const emailField = page.getByPlaceholder(/Email/);
    const passwordField = page.getByPlaceholder("Password");
    const submitBtn = page.getByRole("button", { name: "Sign in" });

    await emailField.fill("nikolandre14@gmail.com");
    await passwordField.fill("12345678");
    await submitBtn.click();

    await expect(page).toHaveURL("https://conduit.mate.academy");

    const profile = page.locator(".nav-link", { has: page.locator(".user-pic") });
    await expect(profile).toBeVisible();
    await expect(profile).toContainText("nap1408")
  });
});
