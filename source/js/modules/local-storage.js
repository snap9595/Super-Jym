const inputFields = document.querySelectorAll('input');

const addLocalStorage = () => {
  inputFields.forEach((inputField) => {
    const key = inputField.id;
    inputField.value = localStorage.getItem(key);
    inputField.addEventListener('input', () => {
      localStorage.setItem(key, inputField.value);
    });
  });
};

export {addLocalStorage};
