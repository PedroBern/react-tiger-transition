import { getEasing } from '../../utils';

export default ({
  name = 'room',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  angle = 90,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: '0% 50%',
      transform: `translateX(100%) rotateY(${-angle}deg)`,
      transformActive: `translateX(0px) rotateY(0deg)`,
    },
    right: {
      origin: '100% 50%',
      transform: `translateX(-100%) rotateY(${angle}deg)`,
      transformActive: `translateX(0px) rotateY(0deg)`,
    },
    top: {
      origin: '50% 0%',
      transform: `translateY(100%) rotateX(${angle}deg)`,
      transformActive: `translateY(0px) rotateX(0deg)`,
    },
    bottom: {
      origin: '50% 100%',
      transform: `translateY(-100%) rotateX(${-angle}deg)`,
      transformActive: `translateY(0px) rotateX(0deg)`,
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
