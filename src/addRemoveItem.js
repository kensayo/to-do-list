const removeItem = (index, list) => {  
  list.splice(index,1);
    
  for (let i = 0; i < list.length; i += 1) {
    list[i].number = i;
  }

  return list;
}

const addItem = (list, description) => {
      
  const item = {
        description: description,
        completed: false,
        number: list.length,
      }

      list.push(item);
    
      return list;
}

const updateDescription = (list, index, description) => {
    list[index].description = description;

    return list;
}

export { updateDescription, removeItem, addItem}