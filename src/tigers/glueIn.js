import { glideOutRules, glueInRules } from './transitions';
import { buildTiger } from './buildTiger';

export const glueIn = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 800,
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
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
  },
  glideOutRules,
);
