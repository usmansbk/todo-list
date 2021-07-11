const TOGGLE = 'action/toggle';
const LOAD_TODOS = 'action/load_todos';
const SORT_ITEMS = 'action/sort';

function createStore() {
  let state = [];
  const subscribers = [];

  const getState = () => state;

  const subscribe = (subscriber) => subscribers.push(subscriber);

  function findTodoIndex(index) {
    return state.findIndex((item) => item.index === Number(index));
  }

  const dispatch = (action) => {
    switch (action.type) {
      case TOGGLE: {
        const todo = state.find((item) => item.index === action.index);
        todo.completed = !todo.completed;
        break;
      }
      case LOAD_TODOS: {
        state = action.items;
        break;
      }
      case SORT_ITEMS: {
        // Find positions
        const srcIndex = findTodoIndex(action.source);
        const destIndex = findTodoIndex(action.dest);

        // Get values
        const src = state[srcIndex];
        const dest = state[destIndex];

        // Swap positions
        state[action.source] = dest;
        state[action.dest] = src;

        // Update indexes
        state = state.map((item, index) => ({ ...item, index }));
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

class TodoStore {
  constructor() {
    this.store = createStore();
  }

  get todos() {
    return this.store.getState();
  }

  toggleTodo(index) {
    this.store.dispatch({
      type: TOGGLE,
      index,
    });
  }

  loadTodos(items) {
    this.store.dispatch({
      type: LOAD_TODOS,
      items,
    });
  }

  swapTodo(source, dest) {
    this.store.dispatch({
      type: SORT_ITEMS,
      source,
      dest,
    });
  }

  onUpdate(callback) {
    this.store.subscribe(callback);
  }
}

const store = new TodoStore();
export default store;