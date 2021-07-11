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
  node.setAttribute('draggable', true);
  node.addEventListener('dragstart', () => {
    console.log('dragstart', index);
  });
  node.addEventListener('dragover', () => {
    console.log('dragover', index);
  });
  node.addEventListener('drop', () => {
    console.log('dragdrop', index);
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