import createStore, {
  ADD_TODO, CLEAR_COMPLETED, DELETE_TODO, EDIT_TODO, LOAD_TODOS, SWAP_TODOS, TOGGLE,
} from '../src/store.js';

describe('Adding an item to store', () => {
  test('should contain single item', () => {
    const store = createStore();
    const action = {
      type: ADD_TODO,
      text: 'Testing with Jest',
    };

    store.dispatch(action);

    expect(store.getState()).toHaveLength(1);
  });

  test('should not add a todo with empty string', () => {
    const store = createStore();
    const action = {
      type: ADD_TODO,
      text: '',
    };

    store.dispatch(action);

    expect(store.getState()).toHaveLength(0);
  });
});

describe('Removing an item from store', () => {
  test('should not have any elements', () => {
    const store = createStore();
    const addAction = {
      type: ADD_TODO,
      text: 'Testing with Jest',
    };
    const removeAction = {
      type: DELETE_TODO,
      index: 0,
    };

    store.dispatch(addAction);
    store.dispatch(removeAction);

    expect(store.getState()).toHaveLength(0);
  });
});

describe('Update', () => {
  test('should edit the item description', () => {
    const store = createStore();
    const addAction = {
      type: ADD_TODO,
      text: 'Testing with Jest',
    };
    const editAction = {
      type: EDIT_TODO,
      index: 0,
      text: 'Editing with Jest',
    };

    store.dispatch(addAction);
    store.dispatch(editAction);
    const todo = store.getState()[0];

    expect(todo.description).toBe('Editing with Jest');
  });

  test("should update item's 'completed' status", () => {
    const store = createStore();
    const addAction = {
      type: ADD_TODO,
      text: 'Testing with Jest',
    };
    const toggleAction = {
      type: TOGGLE,
      index: 0,
    };

    store.dispatch(addAction);
    store.dispatch(toggleAction);
    const todo = store.getState()[0];

    expect(todo.completed).toBeTruthy();
  });

  test('should update index upon drag/drop', () => {
    const store = createStore();
    const items = [
      { index: 0, description: 'Item 1', completed: false },
      { index: 1, description: 'Item 2', completed: false },
    ];
    const loadAction = {
      type: LOAD_TODOS,
      items,
    };
    const swapAction = {
      type: SWAP_TODOS,
      source: 0,
      dest: 1,
    };

    store.dispatch(loadAction);
    store.dispatch(swapAction);
    const firstItem = store.getState()[0];

    expect(firstItem.index).toBe(0);
    expect(firstItem.description).toBe('Item 2');
  });

  test('should clear all completed to-dos', () => {
    const store = createStore();
    const items = [
      { index: 0, description: 'Item 1', completed: true },
      { index: 1, description: 'Item 2', completed: false },
    ];
    const loadAction = {
      type: LOAD_TODOS,
      items,
    };
    const clearAction = {
      type: CLEAR_COMPLETED,
    };

    store.dispatch(loadAction);
    store.dispatch(clearAction);

    expect(store.getState()).toHaveLength(1);
  });
});
