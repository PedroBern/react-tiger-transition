import buildTiger from './buildTiger';
import scaleIn from './transitions/scaleIn';
import scaleOut from './transitions/scaleOut';

export const scale = buildTiger(
  // common
  {},

  // enter
  {
    duration: 300,
    easing: 'ease',
    zIndex: 2,
    delay: 300,
    opacity: 0,
    scale: 0.8,
  },
  scaleIn,

  // exit
  {
    duration: 300,
    easing: 'ease',
    opacity: 0,
    zIndex: 1,
    delay: 0,
    scale: 0.8,
  },
  scaleOut,
);
