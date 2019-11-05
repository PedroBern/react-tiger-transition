import buildTiger from './buildTiger';
import glideInRules from './transitions/glideIn';
import scaleOut from './transitions/scaleOut';

export const glideIn = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideInRules,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    scale: 1,
    delay: 0,
  },
  scaleOut,
);
