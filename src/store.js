const TOGGLE = 'action/toggle';
const LOAD_TODOS = 'action/load_todos';
const SWAP_ITEMS = 'action/swap';
const ADD_TODO = 'action/add_todo';
const EDIT_TODO = 'action/edit_description';

function createStore() {
  let state = [];
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
      case LOAD_TODOS: {
        state = action.items;
        break;
      }
      case SWAP_ITEMS: {
        // Get values
        const src = state[action.source];
        const dest = state[action.dest];

        // Swap positions
        state[action.source] = dest;
        state[action.dest] = src;

        // Update indexes
        dest.index = action.source;
        src.index = action.dest;
        break;
      }
      case ADD_TODO: {
        const todo = {
          index: state.length,
          description: action.text,
          completed: false,
        };
        state.push(todo);
        break;
      }
      case EDIT_TODO: {
        const todo = state[action.index];
        todo.description = action.text;
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
      type: SWAP_ITEMS,
      source,
      dest,
    });
  }

  addTodo(text) {
    this.store.dispatch({
      type: ADD_TODO,
      text,
    });
  }

  editTodo(index, text) {
    this.store.dispatch({
      type: EDIT_TODO,
      index,
      text,
    });
  }

  onUpdate(callback) {
    this.store.subscribe(callback);
  }
}

const store = new TodoStore();
export default store;