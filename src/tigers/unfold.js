import { glideOutRules, unfoldRules } from './transitions';
import { buildTiger } from './buildTiger';

export const unfold = buildTiger(
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
    zIndex: 1,
    delay: 0,
  },
  unfoldRules,

  // exit
  {
    duration: 700,
    opacity: 1,
    zIndex: 2,
  },
  glideOutRules,
);
