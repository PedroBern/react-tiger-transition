import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutQuad',
  opacity = 1,
  replaceBackground = null,
  zIndex = 2,
  delay = 0,
} = {}) => {

  const config = {
    right: {
      translateX: ['-100%', 0]
    },
    left: {
      translateX: ['100%', 0]
    },
    bottom: {
      translateY: ['-100%', 0]
    },
    top: {
      translateY: ['100%', 0]
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
      ...config[direction]
    }),
    replaceBackground
  });

};
