const TOGGLE = 'action/toggle';

function createStore() {
  const state = [];
  const subscribers = [];

  const getState = () => state;

  const subscribe = (subscriber) => subscribers.push(subscriber);

  const dispatch = (action) => {
    switch (action.type) {
      case TOGGLE: {
        const todo = state.find((item) => item.index === action.index);
        todo.completed = !todo.completed;
        break;
      }
      default:
        break;
    }

    subscribers.forEach((subscriber) => subscriber());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE,
    index,
  };
}

export default createStore();