import {swiperCoachs, swiperReviews} from './modules/slider';
import {addTabs} from './modules/tickets';
import {addVideo} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    addVideo();
    addTabs();
    swiperCoachs.init();
    swiperReviews.init();
  });
});
