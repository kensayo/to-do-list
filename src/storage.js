const updateLocalStorage = (updateList) => {
  window.localStorage.setItem('list', JSON.stringify(updateList));
};

const loadLocalStorage = () => {
  let storage = [];

  if (JSON.parse(localStorage.getItem('list'))) {
    storage = JSON.parse(localStorage.getItem('list'));
  }
  return storage;
};

export { updateLocalStorage, loadLocalStorage };