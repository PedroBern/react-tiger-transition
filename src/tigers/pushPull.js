import { pushRules, pullRules } from './transitions';
import { buildTiger } from './buildTiger';

export const pushPull = buildTiger(
  // common
  {
    direction: 'left',
    backgroundColor: null,
  },

  // enter
  {
    duration: 700,
    easing: 'easeInOutBack',
    opacity: 0,
    zIndex: 1,
    angle: 90,
    delay: 150,
  },
  pullRules,

  // exit
  {
    duration: 700,
    easing: 'easeInOutBack',
    opacity: 0,
    zIndex: 2,
    angle: 90,
  },
  pushRules,
);
