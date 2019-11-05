import buildTiger from './buildTiger';
import glueInRules from './transitions/glueIn';
import glideOut from './transitions/glideOut';

export const glueIn = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 1,
    angle: 15,
    depth: 200,
    delay: 0,
  },
  glueInRules,

  // exit
  {
    duration: 400,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
  },
  glideOut,
);
