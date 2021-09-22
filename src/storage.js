

let updateLocalStorage = updateList => {
    window.localStorage.setItem('list', JSON.stringify(updateList));
}

let loadLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('list'))) {
        storage = JSON.parse(localStorage.getItem('list'));
    } else {
        storage = [];
    }
    return storage;
}



export {updateLocalStorage, loadLocalStorage};