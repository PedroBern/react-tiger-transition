import buildTiger from './buildTiger';
import glideIn from './transitions/glideIn';
import glideOut from './transitions/glideOut';

export const glide = buildTiger(
  // common
  {
    direction: 'left',
  },

  // enter
  {
    duration: 600,
    easing: 'easeOutQuad',
    opacity: 1,
    zIndex: 2,
    scale: 1,
    delay: 0,
  },
  glideIn,

  // exit
  {
    duration: 600,
    easing: 'easeOutQuad',
    opacity: 0.3,
    zIndex: 1,
    scale: 1,
    delay: 0,
  },
  glideOut
);
