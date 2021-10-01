import updateStatusItem from '../updateStatus';
import { loadLocalStorage, updateLocalStorage } from '../storage';
import localStorage from '../__mocks__/localStorage'

global.localStorage = new localStorage();
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

document.innerHTML = '<button id="clear"></button>';
const index = list.length - 1;
const text = document.createElement('div');
text.setAttribute('class', 'liContainer');
const text2 = document.getElementsByClassName('liContainer');
const buttonContainer = document.getElementsByClassName('liContainer');
//text.append(buttonContainer);

describe('Create local Storage', () => {
    test('add list into localStorage', () => {        
        updateLocalStorage(list);
        let storage = JSON.parse(global.localStorage.getItem('list'));
        expect(storage.length).toBe(2);
    });
});

describe('Load localeStorage', () => {
    test('populates the items list', () => {
        expect(loadLocalStorage().length).toBe(2);
    });
});

describe('It updates the status of the status of completed of the item', () => {
    test('change the completed status from true to false', () => {   
        list = updateStatusItem(index, text, list);
        expect(text.style.textDecoration).toBe('line-through');
    })
});
