import { flipInRules, flipOutRules } from './transitions';
import { base } from './base';

export const flip = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    duration: 500,
    depth: 500,
    timeout: duration => duration * 2,
  },

  // enter
  {
    easing: 'ease-out',
    opacity: 0.2,
    zIndex: 1,
    fillMode: 'both',
  },
  flipInRules,

  // exit
  {
    easing: 'ease-in',
    opacity: 0.2,
    zIndex: 2,
    fillMode: 'both',
  },
  flipOutRules,
)
