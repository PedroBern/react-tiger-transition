import { roomInRules, roomOutRules } from './transitions';
import { base } from './base';

export const room = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
    angle: 90,
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
    delay: 0,
  },
  roomInRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 2,
    fillMode: 'both',
  },
  roomOutRules,
)
