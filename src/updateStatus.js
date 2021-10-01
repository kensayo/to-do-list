const textDecorate = (index, text, list) => {
    if (list[index].completed === true) {
      text.style.textDecoration = 'line-through';
    } else {
      text.style.textDecoration = 'none';
    }
  };
  
export default function updateStatusItem(index, text, list) {
    
    if (list[index].completed === true) {
      list[index].completed = false;
      textDecorate(index, text, list);
    } else {
      list[index].completed = true;
      textDecorate(index, text, list);
    }
    return list;
};
  