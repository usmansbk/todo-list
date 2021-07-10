import { listItemComponent } from './components.js';

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
  addItemsToDOM(ITEMS);
});