import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  abstract url: string;
  constructor(readonly page: Page) {}

  async visit(): Promise<void> {
    this.page.goto(this.url);
  }
}

export class LogInPage extends BasePage {
  readonly url: string = "https://conduit.mate.academy/user/login";
  readonly emailField: Locator = this.page.getByPlaceholder(/Email/);
  readonly passwordField: Locator = this.page.getByPlaceholder("Password");
  readonly submitBtn = this.page.getByRole("button", { name: "Sign in" });

  async signIn(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitBtn.click();
  }
}
