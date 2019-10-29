import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  depth = 500,
  offset = 200,
} = {}) => {

  const translateArgs = {
    value: 0,
    duration: duration * 0.50,
    delay: duration * 0.25
  };

  const config = {
    left: {
      translateX: [
        { value: `${offset}%`, duration: 0 },
        translateArgs
      ]
    },
    right: {
      translateX: [
        { value: `${-offset}%`, duration: 0 },
        translateArgs
      ]
    },
    top: {
      translateY: [
        { value: `${offset}%`, duration: 0 },
        translateArgs
      ]
    },
    bottom: {
      translateY: [
        { value: `${-offset}%`, duration: 0 },
        translateArgs
      ]
    }
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [
        { value: opacity, duration: 0, endDelay: duration * 0.75 },
        { value: 1, duration: duration / 4 },
      ],
      translateZ: [
        { value: -depth, duration: 0, endDelay: duration * 0.75 },
        { value: 0, duration: duration / 4 },
      ],
      ...config[direction]
    }),
    replaceBackground
  });

};
