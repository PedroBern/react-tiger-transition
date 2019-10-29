import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

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
      transformOrigin: { value: '100% 50%', duration: 0 },
      translateX: [0, '-100%'],
      rotateY: [0, -90]
    },
    right: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      translateX: [0, '100%'],
      rotateY: [0, 90]
    },
    bottom: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      translateY: [0, '100%'],
      rotateX: [0, -90]
    },
    top: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      translateY: [0, '-100%'],
      rotateX: [0, 90]
    },
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [1, opacity],
      translateZ: [
        { value: -depth, duration: duration / 2 },
        { value: 0, duration: duration / 2 },
      ],
      ...config[direction]

    }),
    replaceBackground
  });
};
