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
    easing: 'ease-out',
    opacity: 0.3,
    zIndex: 2,
    fillMode: 'both',
    delay: 0,
  },
  fadeInRules,

  // exit
  {
    duration: 700,
    easing: 'ease-out',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
  },
  fadeOutRules
)
