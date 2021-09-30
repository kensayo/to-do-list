//const { addItem } = require ('../addRemoveItem');
//import {jest} from '@jest/globals'
//const addRem = jest.createMockFromModule('../addRemoveItem')
import { addItem } from '../addRemoveItem';

const list = [];

describe('test', () => {
    test('test test', () => {
      addItem(list, "my Item");
      expect(list.length).toBe(1);
    });
});