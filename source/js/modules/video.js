const button = document.querySelector('[data-button]');
const iframe = document.querySelector('[data-video-iframe]');
const gymBox = document.querySelector('.gym__box');

const addVideo = () => {
  gymBox.classList.remove('no-js');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    gymBox.classList.add('is-active');
    const src = iframe.dataset.src;
    iframe.src = src;
    iframe.src += '?autoplay=1';
  });
};

export {addVideo};
