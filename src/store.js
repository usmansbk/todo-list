export const TOGGLE = 'action/toggle';
export const LOAD_TODOS = 'action/load_todos';
export const SWAP_TODOS = 'action/swap';
export const ADD_TODO = 'action/add_todo';
export const EDIT_TODO = 'action/edit_description';
export const DELETE_TODO = 'action/delete_todo';

export default function createStore() {
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
      case SWAP_TODOS: {
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
        if (todo) {
          todo.description = action.text;
        }
        break;
      }
      case DELETE_TODO: {
        state = state.filter((todo) => todo.index !== action.index)
          .map((item, index) => ({ ...item, index }));
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