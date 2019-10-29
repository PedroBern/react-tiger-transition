import anime from 'animejs';
import { buildTransitionIn } from './buildTransition';


export default ({
  direction = 'left',
  duration = 700,
  easing = 'easeInOutCubic',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  offset = 300,
  angle = 65,
  scale = 0.4,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      transformOrigin: { value: '0% 50%', duration: 0 },
      translateX: [`${offset}%`, 0],
      rotateY: [angle, 0]
    },
    right: {
      transformOrigin: { value: '100% 50%', duration: 0 },
      translateX: [`${-offset}%`, 0],
      rotateY: [-angle, 0]
    },
    top: {
      transformOrigin: { value: '50% 0%', duration: 0 },
      translateY: [`${offset}%`, 0],
      rotateX: [-angle, 0]
    },
    bottom: {
      transformOrigin: { value: '50% 100%', duration: 0 },
      translateY: [`${-offset}%`, 0],
      rotateX: [angle, 0]
    },
  };

  return buildTransitionIn({
    transition: (node) => anime({
      targets: node,
      easing,
      delay,
      duration,
      zIndex: { value: zIndex, duration: 0 },
      opacity: [opacity, 1],
      scale: [scale, 1],
      ...config[direction]
    }),
    replaceBackground
  });

};
