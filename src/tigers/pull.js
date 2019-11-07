import buildTiger from './buildTiger';
import pullRules from './transitions/pull';
import glideOut from './transitions/glideOut';

export const pull = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'easeOutBack',
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
    angle: 90,
  },
  pullRules,

  // exit
  {
    duration: 600,
    easing: 'easeOutBack',
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
  glideOut,
);
