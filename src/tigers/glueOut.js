import { glideInRules, glueOutRules } from './transitions';
import { base } from './base';

export const glueOut= base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    fillMode: 'both',
    delay: 200,
  },
  glideInRules,

  //exit
  {
    duration: 800,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 1,
    fillMode: 'both',
    depth: 200,
    angle: 15,
  },
  glueOutRules,
)
