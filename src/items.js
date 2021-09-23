import * as str from './storage';

const list = [];

const createList = (items) => {
  items.forEach((listed) => {
    list.push(listed);
  });
};

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

    liItem.setAttribute('id', list[i].number);
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = list[i].completed;
    textDecorate(i, description);

    checkBox.addEventListener('click', () => {
      updateStatusItem(i, description);
      str.updateLocalStorage(list);
    });

    description.append(content);
    liItem.append(checkBox);
    liItem.append(description);

    listContainer.append(liItem);
  }
};

const getList = () => list;

export {
  createList, getList, list, updateStatusItem, displayItems,
};