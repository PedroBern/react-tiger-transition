import { cubeInRules, cubeOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const cube= buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    depth: 300,
  },

  // enter
  {
    duration: 700,
    easing: 'ease-in',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
    delay: 0,
  },
  cubeInRules,

  // exit
  {
    duration: 700,
    easing: 'ease-in',
    opacity: 0.3,
    zIndex: 2,
    fillMode: 'both',
  },
  cubeOutRules,
)
