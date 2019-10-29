import { fadeInRules, fadeOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const fade = buildTiger(
  // common
  {
    backgroundColor: 'white',
  },

  // enter
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 0.3,
    zIndex: 2,
  },
  fadeInRules,

  // exit
  {
    duration: 700,
    easing: 'easeOutQuad',
    opacity: 0.3,
    zIndex: 1,
  },
  fadeOutRules
);
