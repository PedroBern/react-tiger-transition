import { pushRules, pullRules } from './transitions';
import { base } from './base';

export const pushPull = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0,
    zIndex: 1,
    fillMode: 'both',
    angle: 90,
    delay: 150,
  },
  pullRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0,
    zIndex: 2,
    fillMode: 'both',
    angle: 90,
  },
  pushRules,
)
