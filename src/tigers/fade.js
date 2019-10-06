import { fadeInRules, fadeOutRules } from './transitions';
import { base } from './base';

export const fade = base(
  // common
  {
    backgroundColor: 'white',
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0,
    zIndex: 2,
    fillMode: 'both',
    delay: 0,
  },
  fadeInRules,

  // exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0,
    zIndex: 1,
    fillMode: 'both',
  },
  fadeOutRules
)
