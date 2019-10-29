import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeOutSine',
  opacity = 1,
  angle = 90,
  replaceBackground = null,
  zIndex = 2,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      rotateY: [-angle, 0]
    },
    right: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      rotateY: [angle, 0]
    },
    bottom: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      rotateX: [-angle, 0]
    },
    top: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      rotateX: [angle, 0]
    },
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      delay,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [opacity, 1],
      ...config[direction]
    }),
    replaceBackground
  });

};
