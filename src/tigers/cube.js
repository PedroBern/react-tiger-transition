import { cubeInRules, cubeOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const cube = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    depth: 300,
    duration: 700,
    easing: 'easeInOutBack',
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
