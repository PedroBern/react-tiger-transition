import { getEasing } from '../../utils';

export default ({
  name = 'scale',
  duration = 600,
  easing = 'ease',
  opacity = 1,
  scale = 0.8,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const style = `
  .${name}-enter {
    z-index: ${zIndex};
    opacity: ${opacity};
    transform: scale(${scale});
  }
  .${name}-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity, transform;
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
