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
  .${name}-exit {
    z-index: ${zIndex};
  }
  .${name}-exit-active {
    opacity: ${opacity};
    transform: scale(${scale});
    transition: opacity, transform;
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
