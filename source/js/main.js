import {swiperCoachs, swiperReviews} from './modules/slider';
import {addTabs} from './modules/tickets';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    addTabs();
    swiperCoachs.init();
    swiperReviews.init();
  });
});
