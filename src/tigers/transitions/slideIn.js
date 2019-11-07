import { getEasing } from '../../utils';


export default ({
  name = 'slide',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  depth = 500,
  offset = 200,
  delay = 0,
} = {}) => {

  const config = {
    left: `X(${offset}%)`,
    right: `X(${-offset}%)`,
    top: `Y(${offset}%)`,
    bottom: `Y(${-offset}%)`,
  };

  const animationName = `${name}--react-tige-transition-slide-in`;
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transform0 = `translateZ(${-depth}px) translate${config[direction]}`;
  const transform75 = `translateZ(${-depth}px)`;

  const style = `
  .${name}-enter {
    z-index: ${zIndex};
    opacity: ${opacity};
  }
  .${name}-enter-active {
    animation: ${animationCss};
    animation-delay: ${delay}ms;
  }
  @keyframes ${animationName} {
    0%, 25% {
      opacity: ${opacity};
      transform: ${transform0};
    }
    75% {
      opacity: ${opacity};
      transform: ${transform75};
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }
  `;

  return style;

};
