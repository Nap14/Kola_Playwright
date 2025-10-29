import { test, expect } from '@playwright/test';

function add(a: number, b: number): number {
  return a + b +1;
}

test("Функція повинна повернути правильне значення", () => {
  expect(add(1, 2)).toEqual(3);
})

test("Функція повинна повернути числове значення", () => {
  expect(typeof add(1, 2)).toBe("number");
});

test("Функція має давати помилку якщо невірний тип даних передано", () => {
  expect(add(1, "1")).toBeUndefined();
})