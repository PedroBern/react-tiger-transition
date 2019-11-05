import buildTiger from './buildTiger';
import pushRules from './transitions/push';
import glideIn from './transitions/glideIn';

export const push = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'easeInBack',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideIn,

  // exit
  {
    duration: 600,
    easing: 'easeInBack',
    opacity: 0.3,
    zIndex: 1,
    angle: 90,
    delay: 0,
  },
  pushRules,
);
