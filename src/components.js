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

  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');

  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button', 'opacity-2');

  const deleteButton = iconButton('delete_outline');
  deleteButton.classList.add('opacity-5');

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(dragButton);

  text.addEventListener('focus', () => {
    dragButton.remove();
    node.appendChild(deleteButton);
  });
  text.addEventListener('blur', () => {
    deleteButton.remove();
    node.appendChild(dragButton);
  });

  return node;
}