import anime from 'animejs';
import { buildTransitionOut } from './buildTransition';

export default ({
  duration = 700,
  easing = 'easeInOutQuad',
  opacity = 0,
  replaceBackground = null,
  zIndex = 1,
} = {}) => buildTransitionOut({
  transition: (node) => anime({
    targets: node,
    easing,
    duration,
    zIndex: { value: zIndex, duration: 0 },
    opacity: [1, opacity],
  }),
  replaceBackground
});
