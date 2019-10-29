import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 2,
  depth = 500,
  angle = 90,
  offset = 100,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: `${50 - offset}% 50%`, duration: 0 },
      translateZ: [0, depth],
      translateX: [0, `${-offset}%`],
      rotateY: [0, angle]
    },
    right: {
      transformOrigin: { value: `${50 + offset}% 50%`, duration: 0 },
      translateZ: [0, -depth],
      translateX: [0, `${offset}%`],
      rotateY: [0, -angle]
    },
    top: {
      transformOrigin: { value: `50% ${50 - offset}%`, duration: 0 },
      translateZ: [0, -depth],
      translateY: [0, `${-offset}%`],
      rotateX: [0, -angle]
    },
    bottom: {
      transformOrigin: { value: `50% ${50 + offset}%`, duration: 0 },
      translateZ: [0, -depth],
      translateY: [0, `${offset}%`],
      rotateX: [0, angle]
    },
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [1, opacity],
      ...config[direction]
    }),
    replaceBackground
  });

};
