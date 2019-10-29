import { slideInRules, slideOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const slide = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    depth: 1000,
    offset: 200,
  },

  // enter
  {
    duration: 700,
    easing: 'easeInOutCubic',
    opacity: 0.5,
    zIndex: 1,
  },
  slideInRules,

  // exit
  {
    duration: 700,
    easing: 'easeInOutCubic',
    opacity: 0.5,
    zIndex: 2,
  },
  slideOutRules,
);
