import { glideInRules, foldRules } from './transitions';
import { base } from './base';

export const fold = base(
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
    zIndex: 2,
    fillMode: 'both',
    delay: 0,
  },
  glideInRules,

  // exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
    angle: 90,
  },
  foldRules,
)
