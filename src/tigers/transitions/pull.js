import { getEasing } from '../../utils';

export default ({
  name = 'pull',
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  angle = 90,
  zIndex = 2,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: '100% 50%',
      transform: `rotateY(${-angle}deg)`,
      transformActive: 'rotateY(0deg)'
    },
    right: {
      origin: '0% 50%',
      transform: `rotateY(${angle}deg)`,
      transformActive: 'rotateY(0deg)'
    },
    bottom: {
      origin: '50% 0%',
      transform: `rotateX(${-angle}deg)`,
      transformActive: 'rotateX(0deg)'
    },
    top: {
      origin: '50% 100%',
      transform: `rotateX(${angle}deg)`,
      transformActive: 'rotateX(0deg)'
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
