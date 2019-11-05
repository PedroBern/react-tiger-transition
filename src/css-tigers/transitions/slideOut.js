import { getEasing } from '../../utils';

export default ({
  name = 'slide',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 2,
  depth = 500,
  offset = 200,
  delay = 0,
} = {}) => {

  const config = {
    left: `X(${-offset}%)`,
    right: `X(${offset}%)`,
    top: `Y(${-offset}%)`,
    bottom: `Y(${offset}%)`,
  };


  const animationName = `${name}--react-tige-transition-slide-out`;
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transform25 = `translateZ(${-depth}px)`;
  const transform75 = `translateZ(${-depth}px) translate${config[direction]}`;
  const transform100 = `translateZ(${-depth}px) translate${config[direction]}`;

  const style = `
  .${name}-exit {
    z-index: ${zIndex};
    opacity: 1;
  }
  .${name}-exit-active {
    animation: ${animationCss};
    animation-delay: ${delay}ms;
  }
  @keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    25% {
      opacity: ${opacity};
      transform: ${transform25};
    }
    75% {
      opacity: ${opacity};
      transform: ${transform75};
    }
    100% {
      opacity: ${opacity};
      transform: ${transform100};
    }
  }
  `;

  return style;

};
