import {swiper} from './modules/modals/swiper';
import {playVideo} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    swiper.init();
    playVideo();
  });
});
