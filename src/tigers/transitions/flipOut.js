import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 500,
  easing = 'easeInQuad',
  opacity = 0.2,
  replaceBackground = null,
  zIndex = 2,
  depth = 1000,
} = {}) => {

  const config = {
    left: {
      rotateY: [0, 90]
    },
    right: {
      rotateY: [0, -90]
    },
    top: {
      rotateX: [0, 90]
    },
    bottom: {
      rotateX: [0, -90]
    },
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      transformOrigin: { value: '50% 50%', duration: 0 },
      opacity: [1, opacity],
      translateZ: [0, -depth],
      ...config[direction]
    }),
    replaceBackground
  });

};
