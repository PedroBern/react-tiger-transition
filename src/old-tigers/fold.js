import { glideInRules, foldRules } from './transitions';
import { buildTiger } from './buildTiger';

export const fold = buildTiger(
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
    delay: 0,
  },
  glideInRules,

  // exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    angle: 90,
  },
  foldRules,
);
