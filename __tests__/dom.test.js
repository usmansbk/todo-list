/**
 * @jest-environment jsdom
 */

import addItemsToDOM, { listItemComponent } from '../src/components.js';

test('Add one new item to the DOM list', () => {
  const mockItems = [{ id: 1, text: 'Testing with Jest', checked: false }];
  document.body.innerHTML = '<ul id="items"></ul>';
  addItemsToDOM(mockItems);

  const list = document.querySelectorAll('#items li');

  expect(list).toHaveLength(1);
});

describe('Edit input', () => {
  test('should update item on return', () => {
    const onEdit = jest.fn();
    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onEdit,
    };

    const node = listItemComponent(item);
    const input = node.querySelector('.edit');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);

    expect(onEdit).toBeCalled();
  });

  test('should update item on blur', () => {
    const onEdit = jest.fn();
    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onEdit,
    };

    const node = listItemComponent(item);
    const input = node.querySelector('.edit');
    const event = new KeyboardEvent('blur');
    input.dispatchEvent(event);

    expect(onEdit).toBeCalled();
  });
});

describe('Button', () => {
  test('delete should remove item on click', () => {
    const onDelete = jest.fn();
    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onDelete,
    };

    const node = listItemComponent(item);
    const button = node.querySelector('.delete-btn');
    const event = new MouseEvent('mousedown');
    button.dispatchEvent(event);

    expect(onDelete).toBeCalled();
  });

  test('toggle button should toggle the completed status', () => {
    const onToggle = jest.fn();
    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onToggle,
    };

    const node = listItemComponent(item);
    const button = node.querySelector('.toggle');
    button.click();

    expect(onToggle).toBeCalled();
  });
});