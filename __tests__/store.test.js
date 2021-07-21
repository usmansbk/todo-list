import { Store } from '../src/todo-store.js';

describe('Adding an item to store', () => {
  test('should contain single item', () => {
    const store = new Store();

    store.addTodo('Testing with Jest');

    expect(store.todos).toHaveLength(1);
  });

  test('should not add a todo with empty string', () => {
    const store = new Store();

    store.addTodo('');

    expect(store.todos).toHaveLength(0);
  });
});

describe('Removing an item from store', () => {
  test('should not have any elements', () => {
    const store = new Store();

    store.addTodo('Testing with Jest');
    store.deleteTodo(0);

    expect(store.todos).toHaveLength(0);
  });
});

describe('Update', () => {
  test('should edit the item description', () => {
    const store = new Store();

    store.addTodo('Testing with Jest');
    store.editTodo(0, 'Editing with Jest');

    const todo = store.todos[0];

    expect(todo.description).toBe('Editing with Jest');
  });

  test("should update item's 'completed' status", () => {
    const store = new Store();

    store.addTodo('Testing with Jest');
    store.toggleTodo(0);
    const todo = store.todos[0];

    expect(todo.completed).toBeTruthy();
  });

  test('should update index upon drag/drop', () => {
    const store = new Store();
    const items = [
      { index: 0, description: 'Item 1', completed: false },
      { index: 1, description: 'Item 2', completed: false },
    ];

    store.loadTodos(items);
    store.swapTodos(0, 1);
    const firstItem = store.todos[0];

    expect(firstItem.index).toBe(0);
    expect(firstItem.description).toBe('Item 2');
  });

  test('should clear all completed to-dos', () => {
    const store = new Store();
    const items = [
      { index: 0, description: 'Item 1', completed: true },
      { index: 1, description: 'Item 2', completed: false },
    ];

    store.loadTodos(items);
    store.clearCompleted();

    expect(store.todos).toHaveLength(1);
  });
});
