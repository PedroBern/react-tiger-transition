import { glideOutRules, unfoldRules } from './transitions';
import { buildTiger } from './buildTiger';

export const unfold= buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
    delay: 0,
  },
  unfoldRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    fillMode: 'both',
  },
  glideOutRules,
)
