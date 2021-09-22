import _ from 'lodash';
import 'bootstrap';
import './css/style.css';
import * as item from './items';
import * as str from './storage'

let items = [
  {
    "description": "3",
    "completed": true,
    "number": 3
  },
  {
    "description": "4",
    "completed": false,
    "number": 4
  },
  
  {
    "description": "1",
    "completed": true,
    "number": 1
  }
];



items.sort(function (a, b) {
  return a.number - b.number;
});

item.createList(items)


const displayItems = () => {

  const listContainer = document.getElementById('list');
  console.log(item.getList().length)

  for (let i = 0; i < item.getList().length; i += 1) {
    
    const liItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const description = document.createElement('span');
    const content = document.createTextNode(item.getList()[i].description)


    console.log(item.getList()[i].description);
    liItem.setAttribute('id', item.getList()[i].number);
    checkBox.setAttribute('type', 'checkbox');

    description.append(content);
    liItem.append(checkBox);
    liItem.append(description);

    listContainer.append(liItem);
  }
}

displayItems();