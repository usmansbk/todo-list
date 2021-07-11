import { listItemComponent } from './components.js';
import store, { loadTodos } from './store.js';

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

function addItemsToDOM(items = []) {
  const list = document.getElementById('items');
  list.innerHTML = '';
  items.forEach((item) => {
    list.appendChild(listItemComponent(item));
  });
}

window.addEventListener('load', () => {
  store.subscribe(() => {
    addItemsToDOM(store.getState());
  });
  store.dispatch(loadTodos(ITEMS));
});