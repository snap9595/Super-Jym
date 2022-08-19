const tabs = document.querySelector('.tickets');
const cards = document.querySelectorAll('.tickets__inner');
const buttons = document.querySelectorAll('.tickets__button');

const addTabs = () => {

  if (tabs) {

    cards.forEach((content) => {
      content.classList.remove('no-js');
    });

    tabs.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = evt.target.dataset.id;
      if (id) {
        cards.forEach((content) => {
          content.classList.remove('is-active');
        });
        buttons.forEach((button) => {
          button.classList.remove('is-active');
        });
        const element = document.getElementById(id);
        element.classList.add('is-active');
        evt.target.classList.add('is-active');
      }
    });
  }
};

export {addTabs};
