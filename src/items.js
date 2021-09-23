const list = [];

const createList = (items) => {
  items.forEach((listed) => {
    list.push(listed);
  });
};

const updateStatusItem = (index)  => {
  if (list[index].completed == true) {
    list[index].completed = false;
  } else {
    list[index].completed = true;
  }  
}

const displayItems = () => {
  const listContainer = document.getElementById('list');

  for (let i = 0; i < list.length; i += 1) {
    const liItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const description = document.createElement('span');
    const content = document.createTextNode(list[i].description);

    liItem.setAttribute('id', list[i].number);
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = list[i].completed;

    description.append(content);
    liItem.append(checkBox);
    liItem.append(description);

    listContainer.append(liItem);
  }
};

const getList = () => list;

export { createList, getList, list, updateStatusItem, displayItems};