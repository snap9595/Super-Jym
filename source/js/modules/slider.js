import Swiper, {Navigation} from 'swiper';

const swiperCoachs = new Swiper('.coachs__swiper.swiper', {
  modules: [Navigation],
  loop: true,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
  },
  navigation: {
    nextEl: '.coachs-button-next',
    prevEl: '.coachs-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
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
