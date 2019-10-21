import { glideInRules, glideOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const glide= buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  //enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideInRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
  },
  glideOutRules
)
