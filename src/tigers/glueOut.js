import buildTiger from './buildTiger';
import glideIn from './transitions/glideIn';
import glueOutRules from './transitions/glueOut';

export const glueOut = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 400,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 200,
  },
  glideIn,

  // exit
  {
    duration: 600,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 1,
    depth: 200,
    angle: 15,
  },
  glueOutRules,
);
