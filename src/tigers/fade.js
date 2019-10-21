import { fadeInRules, fadeOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const fade= buildTiger(
  // common
  {
    backgroundColor: 'white',
  },

  // enter
  {
    duration: 700,
    easing: 'ease-out',
    opacity: 0.3,
    zIndex: 2,
    delay: 0,
  },
  fadeInRules,

  // exit
  {
    duration: 700,
    easing: 'ease-out',
    opacity: 0.3,
    zIndex: 1,
  },
  fadeOutRules
)
