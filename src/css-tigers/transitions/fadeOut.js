import { getEasing } from '../../utils';

export default ({
  name = 'fade',
  duration = 600,
  easing = 'ease',
  opacity = 0,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const style = `
  .${name}-exit {
    z-index: ${zIndex};
  }
  .${name}-exit-active {
    opacity: ${opacity};
    transition: opacity;
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
