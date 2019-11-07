import buildTiger from './buildTiger';
import sideIn from './transitions/sideIn';
import sideOut from './transitions/sideOut';

export const side = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 400,
    easing: 'ease-out',
    opacity: 0,
    zIndex: 1,
    delay: 200,
    depth: 500,
    angle: 90,
    offset: 100,
  },
  sideIn,

  // exit
  {
    duration: 400,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 2,
    depth: 500,
    angle: 90,
    offset: 100,
    delay: 0,
  },
  sideOut,
);
