import buildTiger from './buildTiger';
import cubeIn from './transitions/cubeIn';
import cubeOut from './transitions/cubeOut';

export const cube = buildTiger(
  // common
  {
    direction: 'left',
    depth: 1000,
  },

  // enter
  {
    duration: 600,
    easing: 'ease-in',
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
  },
  cubeIn,

  // exit
  {
    duration: 600,
    easing: 'ease-in',
    opacity: 0.3,
    zIndex: 2,
    delay: 0,
  },
  cubeOut,
);
