import { carouselInRules, carouselOutRules } from './transitions';
import { buildTiger } from './buildTiger';

export const carousel= buildTiger(
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
    scale: 0.4,
    offset: 300,
    angle: 65,
  },
  carouselInRules,

  // exit
  {
    duration: 700,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 2,
    fillMode: 'both',
    scale: 0.4,
    offset: 300,
    angle: 65,
  },
  carouselOutRules,
)
