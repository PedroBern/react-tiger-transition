import { getEasing } from '../../utils';

export default ({
  name = 'folde',
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: '100% 50%',
      transformActive: `translateX(-100%) rotateY(${-angle}deg)`,
    },
    right: {
      origin: '0% 50%',
      transformActive: `translateX(100%) rotateY(${angle}deg)`,
    },
    top: {
      origin: '50% 100%',
      transformActive: `translateY(-100%) rotateX(${angle}deg)`,
    },
    bottom: {
      origin: '50% 0%',
      transformActive: `translateY(100%) rotateX(${-angle}deg)`,
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
