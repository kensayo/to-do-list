const updateLocalStorage = (updateList) => {
  window.localStorage.setItem('list', JSON.stringify(updateList));
};

const loadLocalStorage = () => {
  let storage = [
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

  if (JSON.parse(localStorage.getItem('list'))) {
    storage = JSON.parse(localStorage.getItem('list'));
  }
  return storage;
};

export { updateLocalStorage, loadLocalStorage };