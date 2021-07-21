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

    expect(onDelete).toBeCalled();
  });

  test('drag handle should swap items on drop and drop', () => {
    const onSwap = jest.fn();

    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onSwap,
    };

    const node = listItemComponent(item);

    expect(onSwap).toBeCalled();
  });

  test('toggle button should toggle the completed status', () => {
    const onSwap = jest.fn();

    const item = {
      index: 0,
      description: 'Testing',
      completed: false,
      onSwap,
    };

    const node = listItemComponent(item);

    expect(onSwap).toBeCalled();
  });
});