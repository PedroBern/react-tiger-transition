import { glideOutRules, scaleInRules } from './transitions';
import { buildTiger } from './buildTiger';

export const glideOut = buildTiger(
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
    zIndex: 1,
    delay: 0,
    scale: 1,
  },
  scaleInRules,

  // exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
  },
  glideOutRules,
);
