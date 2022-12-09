const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`please check ${selection} is not found`);
  }
};

export default getElement;
