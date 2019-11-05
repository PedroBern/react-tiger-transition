import { getEasing } from '../../utils';

export default ({
  name = 'flip',
  direction = 'left',
  duration = 500,
  easing = 'easeOutQuad',
  opacity = 0.2,
  zIndex = 1,
  depth = 1000,
} = {}) => {

  const config = {
    left: {
      transform: `translateZ(${-depth}px) rotateY(-90deg)`,
      transformActive: 'translateZ(0px) rotateY(0deg)'
    },
    right: {
      transform: `translateZ(${-depth}px) rotateY(90deg)`,
      transformActive: 'translateZ(0px) rotateY(0deg)'
    },
    top: {
      transform: `translateZ(${-depth}px) rotateX(-90deg)`,
      transformActive: 'translateZ(0px) rotateX(0deg)'
    },
    bottom: {
      transform: `translateZ(${-depth}px) rotateX(90deg)`,
      transformActive: 'translateZ(0px) rotateX(0deg)'
    }
  };

  const transition = `transform, opacity`;
  const delay = duration;

  const style = `
  .${name}-enter {
    transformOrigin: '50% 50%';
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
