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

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.id = id;

  const label = document.createElement('label');
  label.htmlFor = id;
  label.innerText = description;

  node.appendChild(checkbox);
  node.appendChild(label);
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