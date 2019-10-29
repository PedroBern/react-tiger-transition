import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';

export default ({
  duration = 700,
  easing = 'easeOutQuad',
  opacity = 1,
  scale = 0.8,
  replaceBackground = null,
  zIndex = 1,
  delay = 0,
} = {}) => buildTransitionIn({
  transition: (node) => anime({
    targets: node,
    easing,
    delay,
    duration,
    zIndex: { value: zIndex, duration: 0 },
    opacity: [opacity, 1],
    scale: [scale, 1]
  }),
  replaceBackground
});
