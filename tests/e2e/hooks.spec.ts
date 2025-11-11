import { test } from "@playwright/test";

test.describe.only("Main describe", () => {
  test.beforeAll(() => {
    console.log("\x1b[31mBefore all\x1b[0m");
  });

  test.beforeEach(() => {
    console.log("\x1b[32mBefore each\x1b[0m");
  });

  test.afterEach(() => {
    console.log("\x1b[32mAfter each\x1b[0m");
  });

  test.afterAll(() => {
    console.log("\x1b[31mAfter all\x1b[0m");
  });

  test("test1", () => {
    console.log("test1");
  });

  test("test2", () => {
    console.log("test2");
  });

  test.describe("Second describe", () => {
    test.beforeAll(() => {
      console.log("\x1b[31mBefore all inner\x1b[0m");
    });

    test.beforeEach(() => {
      console.log("\x1b[32mBefore each inner\x1b[0m");
    });

    test("test3", () => {
      console.log("test3");
    });

    test("test4", () => {
      console.log("test4");
    });
  });
});
