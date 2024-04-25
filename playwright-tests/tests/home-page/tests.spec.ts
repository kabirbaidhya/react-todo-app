import { test, expect } from '@playwright/test';

test('Home page title', async ({ page }) => {
  await page.goto('localhost:3000');
  await expect(page).toHaveTitle('Todo App');
});

test('Todo has header text', async ({ page }) => {
  await page.goto('localhost:3000');

  const h1Element = await page.$('h1');

  expect(h1Element).not.toBeNull();

  if (h1Element) {
    const h1Text = await h1Element.innerText();
    expect(h1Text).toBe('THINGS TO DO');
  } else {
    throw new Error('h1 element not found');
  }
});

test('input field placeholder text', async ({ page }) => {
  await page.goto('localhost:3000');

  const inputElement = await page.$('.add-todo');
  expect(inputElement).not.toBeNull();

  if (inputElement) {
    const placeholderText = await inputElement.getAttribute('placeholder');
    expect(placeholderText).toBe('Add New');
  } else {
    throw new Error('Input element with class "add-todo" not found');
  }
});