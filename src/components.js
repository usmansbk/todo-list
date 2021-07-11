import './style.css';
import store from './store.js';

function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons', 'icon');

  node.appendChild(icon);
  return node;
}

function listItemComponent({ index, description, completed }) {
  const node = document.createElement('li');
  node.classList.add('todo');
  node.addEventListener('dragstart', (event) => {
    node.classList.add('opacity-0');
    event.dataTransfer.setData('index', index);
  });
  node.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  node.addEventListener('dragend', () => {
    node.setAttribute('draggable', false);
    node.classList.remove('opacity-0');
  });
  node.addEventListener('drop', (event) => {
    const targetIndex = event.dataTransfer.getData('index');
  });

  const checkbox = iconButton(completed ? 'done' : 'check_box_outline_blank');
  checkbox.classList.add('toggle');
  if (completed) {
    node.classList.add('todo-completed');
    checkbox.classList.add('todo-completed');
  }
  checkbox.addEventListener('click', () => {
    store.toggleTodo(index);
  });

  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');
  text.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });

  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button', 'opacity-2');
  dragButton.addEventListener('mousedown', () => {
    node.setAttribute('draggable', true);
  });

  const deleteButton = iconButton('delete_outline');
  deleteButton.classList.add('opacity-5', 'hide');
  deleteButton.addEventListener('mousedown', () => {});

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(deleteButton);
  node.appendChild(dragButton);

  const toggleButtons = () => {
    dragButton.classList.toggle('hide');
    deleteButton.classList.toggle('hide');
  };

  text.addEventListener('focus', toggleButtons);
  text.addEventListener('blur', () => {
    toggleButtons();
  });

  return node;
}

export default function addItemsToDOM(items = []) {
  const list = document.getElementById('items');
  list.innerHTML = '';
  items.forEach((item) => {
    list.appendChild(listItemComponent(item));
  });
}