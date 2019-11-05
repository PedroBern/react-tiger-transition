import { getEasing } from '../../utils';

export default ({
  name = 'carousel',
  direction = 'left',
  duration = 600,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 2,
  offset = 300,
  angle = 65,
  scale = 0.4,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: '100% 50%',
      transformActive: `translateX(${-offset}%) rotateY(${-angle}deg) scale(${scale})`
    },
    right: {
      origin: '0% 50%',
      transformActive: `translateX(${offset}%) rotateY(${angle}deg) scale(${scale})`
    },
    top: {
      origin: '50% 100%',
      transformActive: `translateY(${-offset}%) rotateX(${angle}deg) scale(${scale})`
    },
    bottom: {
      origin: '50% 0%',
      transformActive: `translateY(${offset}%) rotateX(${-angle}deg) scale(${scale})`
    }
  };

  const transition = `transform, opacity`;

  const style = `
  .${name}-exit {
    transformOrigin: ${config[direction].origin};
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
