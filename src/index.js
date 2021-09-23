import 'bootstrap';
import './css/style.css';
import * as item from './items';

const items = [
  {
    description: 'Task 3',
    completed: true,
    number: 3,
  },
  {
    description: 'Task 4',
    completed: false,
    number: 4,
  },

  {
    description: 'Task 1',
    completed: true,
    number: 1,
  },
];

items.sort((a, b) => a.number - b.number);

item.createList(items);
item.displayItems();
