import buildTiger from './buildTiger';
import carouselIn from './transitions/carouselIn';
import carouselOut from './transitions/carouselOut';

export const carousel = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    opacity: 0.3,
    easing: 'easeInOutCubic',
    zIndex: 1,
    delay: 0,
    scale: 0.4,
    offset: 300,
    angle: 65,
  },
  carouselIn,

  // exit
  {
    duration: 600,
    opacity: 0.3,
    easing: 'easeInOutCubic',
    zIndex: 2,
    delay: 0,
    scale: 0.4,
    offset: 300,
    angle: 65,
  },
  carouselOut,
);
