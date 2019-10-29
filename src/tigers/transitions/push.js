import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  replaceBackground = null,
  zIndex = 1,
} = {}) => {

  const config = {
    right: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      rotateY: [0, -angle]
    },
    left: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      rotateY: [0, angle]
    },
    top: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      rotateX: [0, -angle]
    },
    bottom: {
      transformOrigin: { value: '50% 100%', duration: 0 },
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
