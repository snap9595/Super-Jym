import Swiper, {Navigation} from 'swiper';

const swiperCoachs = new Swiper('.coachs__swiper.swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.coachs-button-prev',
    prevEl: '.coachs-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});

const swiperReviews = new Swiper('.reviews__swiper.swiper', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 47,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 58,
    },
    1200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 69,
    },
  },

});

export {swiperCoachs, swiperReviews};
