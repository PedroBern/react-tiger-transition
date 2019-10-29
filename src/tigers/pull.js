import { glideOutRules, pullRules } from './transitions';
import { buildTiger } from './buildTiger';

export const pull = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'easeOutBack',
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
    angle: 90,
  },
  pullRules,

  // exit
  {
    duration: 700,
    easing: 'easeOutBack',
    opacity: 1,
    zIndex: 2,
  },
  glideOutRules,
);
