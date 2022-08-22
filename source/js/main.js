import {swiperCoachs, swiperReviews} from './modules/slider';
import {addTabs} from './modules/tickets';
import {addVideo} from './modules/video';
import {addMask} from './modules/validate';
import {addLocalStorage} from './modules/local-storage';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    addVideo();
    addTabs();
    swiperCoachs.init();
    swiperReviews.init();
    addMask();
    addLocalStorage();
  });
});
