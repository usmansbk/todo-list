import './style.css';

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

function listItemComponent({ id, description, completed }) {
  const node = document.createElement('li');
  node.classList.add('todo');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.id = id;
  checkbox.classList.add('checkbox');

  const text = document.createElement('input');
  text.value = description;
  text.classList.add('label');

  node.appendChild(checkbox);
  node.appendChild(text);
  return node;
}

function addItemsToDOM() {
  const list = document.getElementById('items');
  ITEMS.forEach((item) => {
    list.appendChild(listItemComponent(item));
  });
}

window.addEventListener('load', () => {
  addItemsToDOM();
});