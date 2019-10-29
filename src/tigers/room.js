import { roomInRules, roomOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const room = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    angle: 90,
    easing: 'easeInOutCubic',
  },

  // enter
  {
    duration: 700,
    opacity: 0.3,
    zIndex: 1,
  },
  roomInRules,

  // exit
  {
    duration: 700,
    opacity: 0.3,
    zIndex: 2,
  },
  roomOutRules,
);
