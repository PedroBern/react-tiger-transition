import buildTiger from './buildTiger';
import roomIn from './transitions/roomIn';
import roomOut from './transitions/roomOut';

export const room = buildTiger(
  // common
  {
    direction: 'left',
    angle: 90,
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
  },
  roomIn,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 2,
    delay: 0,
  },
  roomOut,
);
