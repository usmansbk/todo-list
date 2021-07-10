import './style.css';

export function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons');

  node.appendChild(icon);
  return node;
}

export function listItemComponent({ id, description, completed }) {
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