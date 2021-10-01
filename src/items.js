import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import swal from 'sweetalert';
import { updateLocalStorage, loadLocalStorage } from './storage';
import updateStatusItem from '../updateStatus';
import { removeItem, addItem, updateDescription } from './addRemoveItem';

let list = loadLocalStorage();

const redraw = () => {
  const uList = document.getElementById('list');

  while (uList.firstChild) {
    uList.removeChild(uList.firstChild);
  }
};

const deleteItem = (i) => {
  list = removeItem(i, list);
  redraw();
  updateLocalStorage(list);
};

const updateEdit = (i, value) => {
  list = updateDescription(list, i, value);
  updateLocalStorage(list);
};

const displayItems = () => {
  const listContainer = document.getElementById('list');

  for (let i = 0; i < list.length; i += 1) {
    const liItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const description = document.createElement('span');
    const content = document.createTextNode(list[i].description);
    const rm = document.createElement('button');
    const icon = document.createElement('i');
    const edit = document.createElement('input');
    const listener = document.createElement('div');

    liItem.setAttribute('id', list[i].number);
    listener.setAttribute('class', 'liContainer');
    rm.setAttribute('class', 'discard');
    icon.setAttribute('class', 'fas fa-trash');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = list[i].completed;
    edit.setAttribute('type', 'text');
    edit.value = list[i].description;
    edit.setAttribute('class', 'edit-input');

    textDecorate(i, description);

    checkBox.addEventListener('click', () => {
      list = updateStatusItem(i, listener, list);
      updateLocalStorage(list);
      redraw();
      displayItems();
    });

    rm.addEventListener('click', () => {
      deleteItem(i);
      displayItems();
    });

    listener.addEventListener('click', () => {
      edit.style.display = 'initial';
      edit.focus();
    });

    edit.addEventListener('focusin', () => {
      liItem.style.backgroundColor = '#ffff99';
      rm.style.backgroundColor = '#ffff99';
      description.style.display = 'none';
    });

    edit.addEventListener('focusout', () => {
      liItem.style.backgroundColor = 'white';
      rm.style.backgroundColor = 'white';
      edit.style.display = 'none';
      description.style.display = 'initial';
      updateEdit(i, edit.value);
      redraw();
      displayItems();
    });

    edit.addEventListener('keyup', (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        edit.blur();
      }
    });

    description.append(content);
    listener.append(description);
    listener.append(edit);
    rm.appendChild(icon);
    liItem.append(checkBox);
    liItem.append(listener);
    liItem.append(rm);

    listContainer.append(liItem);
  }
};

window.onload = () => {
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  list = list.filter((completed) => completed.completed !== true);
  redraw();
  displayItems();
  updateLocalStorage(list);
});

const task = document.getElementById('task');
task.addEventListener('keyup', (event) => {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    event.preventDefault();
    document.getElementById('addTask').click();
  }
});

const addButton = document.getElementById('addTask');
addButton.addEventListener('click', () => {
  if (task.value === '') {
    swal('The new task is empty', 'Make sure to add something you have to do');
  } else {
    list = addItem(list, task.value);
    task.value = '';
    redraw();
    displayItems();
    updateLocalStorage(list);
  }
});
}

export default {displayItems, textDecorate};