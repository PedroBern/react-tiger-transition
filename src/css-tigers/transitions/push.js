import { getEasing } from '../../utils';

export default ({
  name = 'push',
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const config = {
    right: {
      origin: '100% 50%',
      transformActive: `rotateY(${-angle}deg)`,
    },
    left: {
      origin: '0% 50%',
      transformActive: `rotateY(${angle}deg)`,
    },
    top: {
      origin: '50% 100%',
      transformActive: `rotateX(${-angle}deg)`,
    },
    bottom: {
      origin: '50% 0%',
      transformActive: `rotateX(${angle}deg)`,
    },
  };

  const transition = `transform, opacity`;

  const style = `
  .${name}-exit {
    transform-origin: ${config[direction].origin};
    z-index: ${zIndex};
  }
  .${name}-exit-active {
    transform: ${config[direction].transformActive};
    opacity: ${opacity};
    transition: ${transition};
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
