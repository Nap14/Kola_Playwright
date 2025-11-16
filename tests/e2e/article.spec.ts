import { test, expect } from "@playwright/test";

test.describe("Article", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://conduit.mate.academy/user/login");

    const emailField = page.getByPlaceholder(/Email/);
    const passwordField = page.getByPlaceholder("Password");
    const submitBtn = page.getByRole("button", { name: "Sign in" });

    await emailField.fill("nikolandre14@gmail.com");
    await passwordField.fill("12345678");
    await submitBtn.click();

    await expect(page).toHaveURL("https://conduit.mate.academy");

    const profile = page.locator(".nav-link", {
      has: page.locator(".user-pic"),
    });
    await expect(profile).toBeVisible();
    await expect(profile).toContainText("nik");
  });

  test.afterEach(async ({ page }) => {
    const settingsBtn = page.locator(".nav-item", { hasText: "Settings" });
    await settingsBtn.click();
    await expect(page).toHaveURL(/settings/);

    const logOutBtn = page.locator(".btn-outline-danger");
    await logOutBtn.click();
    await expect(page).toHaveURL("https://conduit.mate.academy");

    const signIn = page.locator(".nab-item", { hasText: "Sign in" });
    await expect(signIn).toBeVisible();
  });

  test("User can create new article", async ({ page }) => {
    const newArticleBtn = page.locator(".nav-item", { hasText: "New Article" });
    await newArticleBtn.click();
    await expect(page).toHaveURL(/editor/);
  });

  test("User open settings", async ({ page }) => {
    const settingsBtn = page.locator(".nav-item", { hasText: "Settings" });
    await settingsBtn.click();
    await expect(page).toHaveURL(/settings/);
  });
});
