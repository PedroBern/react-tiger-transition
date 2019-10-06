import { glideOutRules, pullRules } from './transitions';
import { base } from './base';

export const pull = base(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    fillMode: 'both',
    delay: 0,
    angle: 90,
  },
  pullRules,

  //exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    fillMode: 'both',
  },
  glideOutRules,
)
