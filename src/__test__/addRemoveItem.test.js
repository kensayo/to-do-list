//const { addItem } = require ('../addRemoveItem');
//import {jest} from '@jest/globals'
//const addRem = jest.createMockFromModule('../addRemoveItem')
import { addItem } from '../addRemoveItem';

const list = [];
const item1 = { description: 'testing1', completed: false, index: 1};
const item2 = { description: 'testing2', completed: false, index: 2};

describe('test', () => {
    test('adding a test element', () => {
        addItem(list, item1);
        expect(list.length).toBe(1);
    })

    test('adding a test element', () => {
        addItem(list, item2);
        expect(list.length).toBe(2);
    })
});