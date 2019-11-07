import buildTiger from './buildTiger';
import scaleIn from './transitions/scaleIn';
import glideOutRules from './transitions/glideOut';

export const glideOut = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
    scale: 1,
  },
  scaleIn,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideOutRules,
);
