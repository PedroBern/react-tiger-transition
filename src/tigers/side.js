import { sideInRules, sideOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const side = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 500,
    easing: 'easeOutCubic',
    opacity: 0,
    zIndex: 1,
    delay: 300,
    depth: 500,
    angle: 90,
    offset: 100,
  },
  sideInRules,

  // exit
  {
    duration: 500,
    easing: 'easeInCubic',
    opacity: 0,
    zIndex: 2,
    depth: 500,
    angle: 90,
    offset: 100,
  },
  sideOutRules,
);
