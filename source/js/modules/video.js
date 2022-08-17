const play = document.querySelector('.link');
const img = document.querySelector('.gym__img');

const playVideo = () => {
  play.addEventListener('click', function (evt) {
    evt.preventDefault();
    img.style.display = 'none';
  });
};

export {playVideo};
