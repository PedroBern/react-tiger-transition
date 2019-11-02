import { scaleInRules, scaleOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const scale = buildTiger(
  // common
  {
    backgroundColor: null,
  },

  // enter
  {
    duration: 400,
    easing: 'ease-out',
    opacity: 0,
    zIndex: 1,
    scale: 0.7,
    delay: 400,
  },
  scaleInRules,

  // exit
  {
    duration: 400,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 2,
    scale: 0.7,
  },
  scaleOutRules,
);
