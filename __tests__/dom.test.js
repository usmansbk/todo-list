/**
 * @jest-environment jsdom
 */

import addItemsToDOM from '../src/components.js';

test('Add one new item to the DOM list', () => {
  const mockItems = [{ id: 1, text: 'Testing with Jest', checked: false }];
  document.body.innerHTML = '<ul id="items"></ul>';
  addItemsToDOM(mockItems);

  const list = document.querySelectorAll('#items li');

  expect(list).toHaveLength(1);
});