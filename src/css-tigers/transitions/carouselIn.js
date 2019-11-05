import { getEasing } from '../../utils';


export default ({
  name = 'carousel',
  direction = 'left',
  duration = 600,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  offset = 300,
  angle = 65,
  scale = 0.4,
  delay = 0,
} = {}) => {

  const config = {
    left: {
      origin: '0% 50%',
      transform: `translateX(${offset}%) rotateY(${angle}deg) scale(${scale})`,
      transformActive: 'translateX(0px) rotateY(0deg)'
    },
    right: {
      origin: '100% 50%',
      transform: `translateX(${-offset}%) rotateY(${-angle}deg) scale(${scale})`,
      transformActive: 'translateX(0px) rotateY(0deg)'
    },
    top: {
      origin: '50% 0%',
      transform: `translateY(${offset}%) rotateX(${-angle}deg) scale(${scale})`,
      transformActive: 'translateY(0px) rotateX(0deg)'
    },
    bottom: {
      origin: '50% 100%',
      transform: `translateY(${-offset}%) rotateX(${angle}deg) scale(${scale})`,
      transformActive: 'translateY(0px) rotateX(0deg)'
    }
  };

  const transition = `transform, opacity`;

  const style = `
  .${name}-enter {
    transformOrigin: ${config[direction].origin};
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
