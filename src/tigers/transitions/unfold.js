import { getEasing } from '../../utils';

export default ({
  name = 'unfold',
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  zIndex = 2,
  delay = 0,
} = {}) => {

  const config = {
    right: {
      origin: '100% 50%',
      transform: `rotateY(${-angle}deg) translateX(-100%)`,
      transformActive: 'rotateY(0deg) translateX(0px)'
    },
    left: {
      origin: '0% 50%',
      transform: `rotateY(${angle}deg) translateX(100%)`,
      transformActive: 'rotateY(0deg) translateX(0px)'
    },
    top: {
      origin: '50% 0%',
      transform: `rotateX(${-angle}deg) translateY(100%)`,
      transformActive: 'rotateX(0deg) translateY(0px)'
    },
    bottom: {
      origin: '50% 100%',
      transform: `rotateX(${angle}deg) translateY(-100%)`,
      transformActive: 'rotateX(0deg) translateY(0px)'
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
