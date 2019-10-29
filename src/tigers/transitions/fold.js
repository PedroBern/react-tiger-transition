import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';


export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutCubic',
  opacity = 1,
  angle = 90,
  replaceBackground = null,
  zIndex = 1,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      translateX: [0, '-100%'],
      rotateY: [0, -angle]
    },
    right: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      translateX: [0, '100%'],
      rotateY: [0, angle]
    },
    top: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      translateY: [0, '-100%'],
      rotateX: [0, angle]
    },
    bottom: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      translateY: [0, '100%'],
      rotateX: [0, -angle]
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
