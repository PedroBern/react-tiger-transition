import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'cubicBezier(.42, 0, 1, 1)',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  depth = 200,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      translateX: ['100%', 0],
      rotateY: [90, 0]
    },
    right: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      translateX: ['-100%', 0],
      rotateY: [-90, 0]
    },
    top: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      translateY: ['100%', 0],
      rotateX: [-90, 0]
    },
    bottom: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      translateY: ['-100%', 0],
      rotateX: [90, 0]
    },
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [opacity, 1],
      translateZ: [
        { value: -depth, duration: duration / 2 },
        { value: 0, duration: duration / 2 },
      ],
      ...config[direction]
    }),
    replaceBackground
  });
};
