import { glideInRules, scaleOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const glideIn = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideInRules,

  // exit
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 0.3,
    zIndex: 1,
    scale: 1,
  },
  scaleOutRules,
);
