import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 2,
  offset = 300,
  angle = 65,
  scale = 0.4,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      translateX: [0, `${-offset}%`],
      rotateY: [0, -angle]
    },
    right: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      translateX: [0, `${offset}%`],
      rotateY: [0, angle]
    },
    top: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      translateY: [0, `${-offset}%`],
      rotateX: [0, angle]
    },
    bottom: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      translateY: [0, `${offset}%`],
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
      scale: [1, scale],
      ...config[direction]
    }),
    replaceBackground
  });

};
