import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeOutCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  depth = 500,
  angle = 90,
  offset = 100,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: `${50 + offset}% 50%`, duration: 0 },
      translateZ: [-depth, 0],
      translateX: 0,
      rotateY: [-angle, 0]
    },
    right: {
      transformOrigin: { value: `${-(50 + offset)}% 50%`, duration: 0 },
      translateZ: [depth, 0],
      translateX: 0,
      rotateY: [angle, 0]
    },
    top: {
      transformOrigin: { value: `50% ${50 + offset}%`, duration: 0 },
      translateZ: [-depth, 0],
      translateY: 0,
      rotateX: [angle, 0]
    },
    bottom: {
      transformOrigin: { value: `50% ${-(50 + offset)}%`, duration: 0 },
      translateZ: [depth, 0],
      translateY: 0,
      rotateX: [-angle, 0]
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
