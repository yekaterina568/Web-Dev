const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === '') {
    return;
  }

  createTodoItem(text);
  input.value = '';
});

function createTodoItem(text) {
  const listItem = document.createElement('li');

  const leftPart = document.createElement('div');
  leftPart.className = 'left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('span');
  label.textContent = text;

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('done');
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '🗑';
  deleteButton.className = 'delete-btn';

  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  leftPart.appendChild(checkbox);
  leftPart.appendChild(label);

  listItem.appendChild(leftPart);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
}
