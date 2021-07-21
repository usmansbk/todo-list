import createStore, { ADD_TODO, DELETE_TODO } from '../src/store.js';

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