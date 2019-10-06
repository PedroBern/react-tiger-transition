import { slideInRules, slideOutRules } from './transitions';
import { base } from './base';

export const slide = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    depth: 500,
    offset: 200,
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.5,
    zIndex: 1,
    fillMode: 'both',
    delay: 0,
  },
  slideInRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.5,
    zIndex: 2,
    fillMode: 'both',
  },
  slideOutRules,
)
