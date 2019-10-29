import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  depth = 200,
  angle = 15,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      rotateY: [
        { value: angle, duration: duration * 0.4 },
        { value: 0, duration: duration * 0.6 },
      ]
    },
    right: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      rotateY: [
        { value: -angle, duration: duration * 0.4 },
        { value: 0, duration: duration * 0.6 },
      ]
    },
    top: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      rotateX: [
        { value: angle, duration: duration * 0.4 },
        { value: 0, duration: duration * 0.6 },
      ]
    },
    bottom: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      rotateX: [
        { value: -angle, duration: duration * 0.4 },
        { value: 0, duration: duration * 0.6 },
      ]
    }
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [1, opacity],
      translateZ: [0, -depth],
      ...config[direction]
    }),
    replaceBackground
  });

};
