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

function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons');

  node.appendChild(icon);
  return node;
}

function listItemComponent({ id, description, completed }) {
  const node = document.createElement('li');
  node.classList.add('todo');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.id = id;
  checkbox.classList.add('toggle');

  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');

  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button');

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(dragButton);

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