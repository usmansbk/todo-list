import './style.css';

export function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons', 'icon');

  node.appendChild(icon);
  return node;
}

export function listItemComponent({ description, completed }) {
  const node = document.createElement('li');
  node.classList.add('todo');
  if (completed) {
    node.classList.add('todo-completed');
  } else {
    node.classList.remove('todo-completed');
  }

  const checkbox = iconButton(completed ? 'done' : 'check_box_outline_blank');
  checkbox.classList.add('toggle');
  if (completed) {
    checkbox.classList.add('todo-completed');
  }
  checkbox.addEventListener('click', () => {});

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
  dragButton.addEventListener('mousedown', () => {});

  const deleteButton = iconButton('delete_outline');
  deleteButton.classList.add('opacity-5', 'hide');
  deleteButton.addEventListener('mousedown', () => {});

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(deleteButton);
  node.appendChild(dragButton);

  text.addEventListener('focus', () => {
    dragButton.classList.add('hide');
    deleteButton.classList.remove('hide');
  });
  text.addEventListener('blur', () => {
    deleteButton.classList.add('hide');
    dragButton.classList.remove('hide');
  });

  return node;
}