import { glideInRules, glueOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const glueOut= buildTiger(
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
    delay: 200,
  },
  glideInRules,

  //exit
  {
    duration: 800,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 1,
    depth: 200,
    angle: 15,
  },
  glueOutRules,
)
