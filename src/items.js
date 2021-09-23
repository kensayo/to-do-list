import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {updateLocalStorage, loadLocalStorage} from './storage';
import { removeItem, addItem, updateDescription } from './addRemoveItem';

let list = loadLocalStorage();

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


const redraw = () => {
  const uList = document.getElementById('list');

  while (uList.firstChild) {
    uList.removeChild(uList.firstChild);
  }

  
  displayItems();
}

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

    liItem.setAttribute('id', list[i].number);
    rm.setAttribute('class', 'discard')
    icon.setAttribute('class', 'fas fa-trash')
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = list[i].completed;
    edit.setAttribute('type', 'text');
    edit.value = list[i].description;
    edit.setAttribute('class', 'edit-input');

    textDecorate(i, description);

    checkBox.addEventListener('click', () => {
      updateStatusItem(i, description);
      updateLocalStorage(list);
    });

    rm.addEventListener('click', () =>{
      list = removeItem(i, list);
      redraw();
      updateLocalStorage(list);
    });

    liItem.addEventListener('click', () => { 
      edit.style.display = 'initial';
      edit.focus();
    });

    edit.addEventListener('focusin', () => {     
      liItem.style.backgroundColor = '#ffff99';
      rm.style.backgroundColor = '#ffff99'
      description.style.display = 'none';
    });

    edit.addEventListener('focusout', () => {     
      liItem.style.backgroundColor = 'white';
      rm.style.backgroundColor = 'white';
      edit.style.display = 'none';
      description.style.display = 'initial';
      list = updateDescription(list, i, edit.value);
      redraw();
      updateLocalStorage(list)
    });

    edit.addEventListener("keyup", function(event) {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        edit.blur();
      }
  });

    description.append(content);
    rm.appendChild(icon);
    liItem.append(checkBox);
    liItem.append(description);
    liItem.append(edit);
    liItem.append(rm);

    listContainer.append(liItem);
  }  

};

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  console.log("cl")
  list = list.filter((completed) => completed.completed !== true);
  redraw();
  updateLocalStorage(list);
});

const  task = document.getElementById('task');
task.addEventListener("keyup", function(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        document.getElementById('addTask').click();
    }
});

const addButton = document.getElementById('addTask');
addButton.addEventListener('click', () => {
  if (task.value == "") {
    alert("The new task must be no empty");
  }else{
    list = addItem(list, task.value)
    task.value = "";
    redraw();
    updateLocalStorage(list);
  }
});

export {
  displayItems
};