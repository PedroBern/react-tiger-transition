import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 2,
  depth = 500,
  offset = 200,
} = {}) => {

  const translateDelay = 0.25 * duration;
  const translateDuration = 0.50 * duration;

  const config = {
    left: {
      translateX: {
        value: `${-offset}%`,
        delay: translateDelay,
        duration: translateDuration
      }
    },
    right: {
      translateX: {
        value: `${offset}%`,
        delay: translateDelay,
        duration: translateDuration
      }
    },
    top: {
      translateY: {
        value: `${-offset}%`,
        delay: translateDelay,
        duration: translateDuration
      }
    },
    bottom: {
      translateY: {
        value: `${offset}%`,
        delay: translateDelay,
        duration: translateDuration
      }
    },
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: { value: opacity, duration: duration / 4 },
      translateZ: { value: -depth, duration: duration / 4 },
      ...config[direction]
    }),
    replaceBackground
  });

};
