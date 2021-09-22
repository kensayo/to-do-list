const list = [];

const createList = (items) => {
  items.forEach((listed) => {
    list.push(listed);
  });
};

const getList = () => list;

export { createList, getList };