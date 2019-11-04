import { getEasing } from '../../utils';

export default ({
  name = 'flip',
  direction = 'left',
  duration = 500,
  easing = 'easeInQuad',
  opacity = 0.2,
  zIndex = 2,
  depth = 1000,
} = {}) => {

  const config = {
    left: `translateZ(${-depth}px) rotateY(90deg)`,
    right: `translateZ(${-depth}px) rotateY(-90deg)`,
    top: `translateZ(${-depth}px) rotateX(90deg)`,
    bottom: `translateZ(${-depth}px) rotateX(-90deg)`,
  };

  const transition = `transform, opacity`;

  const style = `
  .${name}-exit {
    z-index: ${zIndex};
  }
  .${name}-exit-active {
    transform: ${config[direction]};
    opacity: ${opacity};
    transition: ${transition};
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
