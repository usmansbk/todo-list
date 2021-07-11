const TOGGLE = 'action/toggle';
const LOAD_TODOS = 'action/load_todos';

// function sortItems(items = []) {
//   return items.sort((a, b) => a.index - b.index);
// }

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

  onUpdate(callback) {
    this.store.subscribe(callback);
  }
}

const store = new TodoStore();
export default store;