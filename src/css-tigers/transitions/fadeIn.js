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
  .${name}-enter {
    z-index: ${zIndex};
    opacity: ${opacity};
  }
  .${name}-enter-active {
    opacity: 1;
    transition: opacity;
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
