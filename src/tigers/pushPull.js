import buildTiger from './buildTiger';
import push from './transitions/push';
import pull from './transitions/pull';

export const pushPull = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 500,
    easing: 'easeInOutBack',
    opacity: 0,
    zIndex: 1,
    angle: 90,
    delay: 100,
  },
  pull,

  // exit
  {
    duration: 500,
    easing: 'easeInOutBack',
    opacity: 0,
    zIndex: 2,
    angle: 90,
  },
  push,
);
