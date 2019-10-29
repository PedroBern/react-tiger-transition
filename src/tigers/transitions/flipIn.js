import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 500,
  easing = 'easeOutQuad',
  opacity = 0.2,
  replaceBackground = null,
  zIndex = 1,
  depth = 1000,
} = {}) => {

  const config = {
    left: {
      rotateY: [-90, 0]
    },
    right: {
      rotateY: [90, 0]
    },
    top: {
      rotateX: [-90, 0]
    },
    bottom: {
      rotateX: [90, 0]
    },
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      delay: duration,
      zIndex: { value: zIndex, duration: 0 },
      transformOrigin: { value: '50% 50%', duration: 0 },
      opacity: [opacity, 1],
      translateZ: [-depth, 0],
      ...config[direction]
    }),
    replaceBackground
  });

};
