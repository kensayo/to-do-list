import { updateStatusItem, textDecorate } from '../items';
import LocalStorage from '../__mocks__/LocalStorage.js';


global.localStorage = new LocalStorage();
const index = list.index;
const text = 'Sample text';
const condition = (list[index].completed) ? list[index].completed = false : list[index].completed = true;

describe('Update status of the index', () => {

    test('it will toggle the status of the index to complete when clicked', () => {
        condition(true)(expect(updateStatusItem(index, text).toBe(false)));
    });

  });