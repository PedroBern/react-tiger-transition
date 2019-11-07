import buildTiger from './buildTiger';
import flipIn from './transitions/flipIn';
import flipOut from './transitions/flipOut';

export const flip = buildTiger(
  // common
  {
    direction: 'left',
    duration: 300,
  },

  // enter
  {
    easing: 'easeOutQuad',
    opacity: 0.2,
    zIndex: 1,
    depth: 1000,
  },
  flipIn,

  // exit
  {
    easing: 'easeInQuad',
    opacity: 0.2,
    zIndex: 2,
    depth: 1000,
  },
  flipOut,
);
