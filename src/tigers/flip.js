import { flipInRules, flipOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const flip = buildTiger(
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
    easing: 'easeOutQuad',
    opacity: 0.2,
    zIndex: 1,
  },
  flipInRules,

  // exit
  {
    easing: 'easeInQuad',
    opacity: 0.2,
    zIndex: 2,
  },
  flipOutRules,
);
