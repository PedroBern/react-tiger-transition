import { getEasing } from '../../utils';

export default ({
  name = 'side',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 2,
  depth = 500,
  angle = 90,
  offset = 100,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: `${50 - offset}% 50%`,
      transformActive: `translateZ(${depth}px) rotateY(${angle}deg)`,
    },
    right: {
      origin: `${50 + offset}% 50%`,
      transformActive: `translateZ(${-depth}px) rotateY(${-angle}deg)`,
    },
    bottom: {
      origin: `50% ${50 - offset}%`,
      transformActive: `translateZ(${-depth}px) rotateX(${-angle}deg)`,
    },
    top: {
      origin: `50% ${50 + offset}%`,
      transformActive: `translateZ(${-depth}px) rotateX(${angle}deg)`,
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
