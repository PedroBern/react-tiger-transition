import buildTiger from './buildTiger';
import scaleIn from './transitions/scaleIn';
import scaleOut from './transitions/scaleOut';

export const fade = buildTiger(
  // common
  {},

  // enter
  {
    duration: 600,
    easing: 'ease-in',
    zIndex: 1,
    opacity: 0,
    scale: 1,
  },
  scaleIn,

  // exit
  {
    duration: 600,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 2,
    delay: 0,
    scale: 1,
  },
  scaleOut,
);
