import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  direction = 'top',
  duration = 700,
  easing = 'easeInOutQuad',
  opacity = 1,
  replaceBackground = null,
  scale = 1,
  zIndex = 1,
} = {}) => {

  const config = {
    right: {
      translateX: [0, '-100%'],
    },
    left: {
      translateX: [0, '100%'],
    },
    bottom: {
      translateY: [0, '-100%'],
    },
    top: {
      translateY: [0, '100%'],
    }
  };

  return buildTransitionOut({
    transition: (node) => anime({
      targets: node,
      easing,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      scale: [1, scale],
      opacity: [1, opacity],
      ...config[direction]
    }),
    replaceBackground
  });

};
