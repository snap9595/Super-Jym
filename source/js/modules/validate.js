let telInput = document.querySelectorAll('input[type="tel"]');

const addMask = () => {
  for (let i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
      initNumber(this);
    };
  }

  function initNumber(input) {
    let value = input.value;
    let re = /[^0-9\-\(\)\+\ ]/gi;
    if (re.test(value)) {
      value = value.replace(re, '');
      input.value = value;
    }
  }
};

export {addMask};
