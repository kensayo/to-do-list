import { updateStatusItem, textDecorate } from '../items';
import { loadLocalStorage, updateLocalStorage } from '../storage';
import jest from '@jest/globals'
jest.mock('../localStorage.js');

global.localStorage = new LocalStorage();
let list = []
list = [{    
        description: 'Test 1',
        completed: false,
        number: 1},
        {
        description: 'Test 1',
        completed: false,
        number: 2}
    ];
updateLocalStorage();
const index = list.index;
const text = 'Sample text';
//const condition = (list[index].completed) ? list[index].completed = false : list[index].completed = true;


describe('Update status of the index', () => {

    test('it will toggle the status of the index to complete when clicked', () => {
        expect(loadLocalStorage().length).toBe();
    });

  });