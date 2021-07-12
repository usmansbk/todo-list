import renderItems from './components.js';
import store from './store.js';

const ITEMS = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
];

window.addEventListener('load', () => {
  const STORE_KEY = 'localstorage/todos';

  store.onUpdate(() => {
    renderItems(store.todos);
  });
  store.onUpdate(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store.todos));
  });
  const saved = localStorage.getItem(STORE_KEY);
  store.loadTodos(saved ? JSON.parse(saved) : ITEMS);
});