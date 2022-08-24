let telInput = document.querySelectorAll('[data-phone]');

const addMask = () => {
  for (let i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
      initNumber(this);
    };
  }

  function initNumber(input) {
    let value = input.value;
    let phone = /[^0-9\-\(\)\+\ ]/gi;
    if (phone.test(value)) {
      value = value.replace(phone, '');
      input.value = value;
    }
  }
};

export {addMask};
