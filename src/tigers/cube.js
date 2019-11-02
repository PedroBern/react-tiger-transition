import { cubeInRules, cubeOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const cube = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    depth: 300,
    easing: 'easeInOutBack',
    duration: 700,
  },

  // enter
  {
    opacity: 0.3,
    zIndex: 1,
  },
  cubeInRules,

  // exit
  {
    opacity: 0.3,
    zIndex: 2,
  },
  cubeOutRules,
);
