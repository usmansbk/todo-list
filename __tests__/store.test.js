import createStore, { ADD_TODO } from '../src/store.js';

describe('Store', () => {
  test('should be empty', () => {
    const store = createStore();

    expect(store.getState().length).toBe(0);
  });

  test('should contain single item', () => {
    const store = createStore();
    const action = {
      type: ADD_TODO,
      text: 'Testing with Jest',
    };

    store.dispatch(action);

    expect(store.getState().length).toBe(1);
  });

  test('should not add a todo with empty string', () => {
    const store = createStore();
    const action = {
      type: ADD_TODO,
      text: '',
    };

    store.dispatch(action);

    expect(store.getState().length).toBe(0);
  });
});