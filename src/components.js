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
  checkbox.classList.add('toggle', completed ? 'todo-completed' : 'todo-uncompleted');

  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');

  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button', 'opacity-2');

  const deleteButton = iconButton('delete');
  deleteButton.classList.add('hide', 'opacity-2');

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(dragButton);
  node.appendChild(deleteButton);

  return node;
}