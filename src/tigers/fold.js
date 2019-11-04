import { glideInRules, foldRules } from './transitions';
import { buildTiger } from './buildTiger';

export const fold = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    easing: 'easeInOutCubic',
  },

  // enter
  {
    duration: 700,
    opacity: 0.3,
    zIndex: 2,
    delay: 0,
  },
  glideInRules,

  // exit
  {
    duration: 700,
    opacity: 0.3,
    zIndex: 1,
    angle: 90,
  },
  foldRules,
);
