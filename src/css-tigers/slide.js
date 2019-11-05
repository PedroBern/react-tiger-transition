import buildTiger from './buildTiger';
import slideIn from './transitions/slideIn';
import slideOut from './transitions/slideOut';

export const slide = buildTiger(
  // common
  {
    direction: 'left',
    depth: 500,
    offset: 200,
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.5,
    zIndex: 1,
    delay: 0,
  },
  slideIn,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.5,
    zIndex: 2,
  },
  slideOut,
);
