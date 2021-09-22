let list = [];

const createList = (items) => {
    items.forEach(listed => {        
    list.push(listed);
    });
}

const getList = () => {
    return list;
}


export {createList, getList};