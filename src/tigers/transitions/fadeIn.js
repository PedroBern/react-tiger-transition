import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  duration = 700,
  easing = 'easeOutQuad',
  opacity = 0,
  replaceBackground = null,
  zIndex = 1,
} = {}) => buildTransitionIn({
  transition: (node) => anime({
    targets: node,
    easing,
    duration,
    zIndex: { value: zIndex, duration: 0 },
    opacity: [opacity, 1],
  }),
  replaceBackground
});
