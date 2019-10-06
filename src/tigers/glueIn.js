import { glideOutRules, glueInRules } from './transitions';
import { base } from './base';

export const glueIn = base(
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
    fillMode: 'both',
    angle: 15,
    depth: 200,
    delay: 200,
  },
  glueInRules,

  //exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    fillMode: 'both',
  },
  glideOutRules,
)
