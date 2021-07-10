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

export function listItemComponent({ description, completed }) {
  const node = document.createElement('li');
  node.classList.add('todo');

  const checkbox = iconButton(completed ? 'done' : 'check_box_outline_blank');
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