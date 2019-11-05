import { getEasing } from '../../utils';

export default ({
  name = 'side',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  depth = 500,
  angle = 90,
  offset = 100,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: `${50 + offset}% 50%`,
      transform: `translateZ(${-depth}px) rotateY(${-angle}deg)`,
      transformActive: `translateX(0px) rotateY(0deg)`
    },
    right: {
      origin: `${-(50 + offset)}% 50%`,
      transform: `translateZ(${depth}px) rotateY(${angle}deg)`,
      transformActive: `translateX(0px) rotateY(0deg)`
    },
    bottom: {
      origin: `50% ${50 + offset}%`,
      transform: `translateZ(${-depth}px) rotateX(${angle}deg)`,
      transformActive: `translateY(0px) rotateX(0deg)`
    },
    top: {
      origin: `50% ${-(50 + offset)}%`,
      transform: `translateZ(${-depth}px) rotateX(${-angle}deg)`,
      transformActive: `translateY(0px) rotateX(0deg)`
    }
  };

  const transition = `transform, opacity`;

  const style = `
  .${name}-enter {
    transform-origin: ${config[direction].origin};
    transform: ${config[direction].transform};
    z-index: ${zIndex};
    opacity: ${opacity};
  }
  .${name}-enter-active {
    transform: ${config[direction].transformActive};
    opacity: 1;
    transition: ${transition};
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
