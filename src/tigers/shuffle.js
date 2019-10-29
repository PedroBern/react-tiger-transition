import { shuffleInRules, shuffleOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const shuffle = buildTiger(
  // common
  {
    direction: 'top',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 1,
    scale: 1,
    zIndex: 2,
    delay: 0,
  },
  shuffleInRules,

  // exit
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 0.3,
    scale: 1,
    zIndex: 1,
  },
  shuffleOutRules
);
