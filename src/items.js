import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import * as str from './storage';

const list = str.loadLocalStorage();

const textDecorate = (index, text) => {
  if (list[index].completed === true) {
    text.style.textDecoration = 'line-through';
  } else {
    text.style.textDecoration = 'none';
  }
};

const updateStatusItem = (index, text) => {
  if (list[index].completed === true) {
    list[index].completed = false;
    textDecorate(index, text);
  } else {
    list[index].completed = true;
    textDecorate(index, text);
  }
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

    liItem.setAttribute('id', list[i].number);
    rm.setAttribute('class', 'discard')
    icon.setAttribute('class', 'fas fa-trash')
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = list[i].completed;
    textDecorate(i, description);

    checkBox.addEventListener('click', () => {
      updateStatusItem(i, description);
      str.updateLocalStorage(list);
    });

    rm.addEventListener('click', () =>{



    });

    description.append(content);
    rm.appendChild(icon);
    liItem.append(checkBox);
    liItem.append(description);
    liItem.append(rm);

    listContainer.append(liItem);
  }
};


export {
  displayItems
};