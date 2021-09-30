// const { addItem } = require ('../addRemoveItem');
// import {jest} from '@jest/globals'
// const addRem = jest.createMockFromModule('../addRemoveItem')
import { addItem, updateDescription, removeItem } from '../addRemoveItem';

const list = [];
const item1 = { description: 'testing1', completed: false, index: 1 };
const item2 = { description: 'testing2', completed: false, index: 2 };
const index1 = list.length;
const index2 = list.length;

describe('Adding test', () => {
  test('adding a test element', () => {
    addItem(list, item1);
    expect(list.length).toBe(1);
  });
  test('adding a test element', () => {
    addItem(list, item2);
    expect(list.length).toBe(2);
  });
});

describe('Updating array test', () => {
  test('updates the description of the first element in the list', () => {
    updateDescription(list, index1, 'hello');
    expect(list[index1].description).toBe('hello');
  });
  test('updates the description of the second element in the list', () => {
    updateDescription(list, index2, 'goodbye');
    expect(list[index2].description).toBe('goodbye');
  });
});

describe('Deleting array test', () => {
  test('remove second item from the list', () => {
    removeItem(list.length - 1, list);
    expect(list.length).toBe(1);
  });
  test('remove first item from the list', () => {
    removeItem(list.length - 1, list);
    expect(list.length).toBe(0);
  });
});