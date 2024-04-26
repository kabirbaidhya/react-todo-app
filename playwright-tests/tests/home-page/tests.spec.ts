import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

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


test('Check for 3 div elements with test task', async ({ page }) => {
  await page.goto('localhost:3000');

  await page.waitForSelector('.todo-item');

  const todoItems = await page.$$('.todo-item');

  let taskCount = 0;
  for (const item of todoItems) {
    const taskText = await item.innerText();
    if (taskText.includes('Learn Javascript') || taskText.includes('Learn React') || taskText.includes('Build a React App')) {
      taskCount++;
    }
  }

  expect(taskCount).toBe(3);
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

test('Buttons has the text', async ({ page }) => {
  await page.goto('localhost:3000');

   const allButtonText = await page.textContent('.filters li:nth-child(1) a');
   const activeButtonText = await page.textContent('.filters li:nth-child(2) a');
   const completedButtonText = await page.textContent('.filters li:nth-child(3) a');
 
   expect(allButtonText).toBe('All');
   expect(activeButtonText).toBe('Active');
   expect(completedButtonText).toBe('Completed');

});

test('Adding a task increases the item count', async ({ page }) => {
    await page.goto('localhost:3000');

    const initialItemCount = await page.textContent('.pull-left');
  
    await page.fill('input[type="text"]', 'New Task');
    await page.click('a.button.add');
  
    await page.waitForTimeout(1000);
  
    const updatedItemCount = await page.textContent('.pull-left');
  
    // Convert item count strings to numbers
    const initialItemCountNumber = parseInt(initialItemCount!);
    const updatedItemCountNumber = parseInt(updatedItemCount!);
  
    expect(updatedItemCountNumber).toBe(initialItemCountNumber + 1);
});