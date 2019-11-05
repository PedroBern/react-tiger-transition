import buildTiger from './buildTiger';
import glideIn from './transitions/glideIn';
import foldRules from './transitions/fold';

export const fold = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 2,
    delay: 0,
  },
  glideIn,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    angle: 90,
    delay: 0,
  },
  foldRules,
);
