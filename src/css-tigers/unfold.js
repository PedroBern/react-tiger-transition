import buildTiger from './buildTiger';
import glideOut from './transitions/glideOut';
import unfoldRules from './transitions/unfold';

export const unfold = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'ease',
    opacity: 0.3,
    zIndex: 1,
    angle: 90,
    delay: 0,
  },
  unfoldRules,

  // exit
  {
    duration: 600,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideOut,
);
