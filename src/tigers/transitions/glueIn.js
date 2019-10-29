import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  depth = 200,
  angle = 15,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      rotateY: [
        { value: -angle, duration: duration * 0.6 },
        { value: 0, duration: duration * 0.4 },
      ]
    },
    right: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      rotateY: [
        { value: angle, duration: duration * 0.6 },
        { value: 0, duration: duration * 0.4 },
      ]
    },
    top: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      rotateX: [
        { value: -angle, duration: duration * 0.6 },
        { value: 0, duration: duration * 0.4 },
      ]
    },
    bottom: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      rotateX: [
        { value: angle, duration: duration * 0.6 },
        { value: 0, duration: duration * 0.4 },
      ]
    }
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      delay,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [opacity, 1],
      translateZ: [-depth, 0],
      ...config[direction]
    }),
    replaceBackground
  });

};
