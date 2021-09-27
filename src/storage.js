const updateLocalStorage = (updatedList) => {
  window.localStorage.setItem('list', JSON.stringify(updatedList));
};

const loadLocalStorage = () => {
  let storage = [];

  if (JSON.parse(localStorage.getItem('list'))) {
    storage = JSON.parse(localStorage.getItem('list'));
  }
  return storage;
};

export { updateLocalStorage, loadLocalStorage };