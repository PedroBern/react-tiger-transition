import { getEasing } from '../../utils';

export default ({
  name = 'cube',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  depth = 200,
  delay = 0,
} = {}) => {

  const config = {
    left: ['0% 50%', 'X(100%)', 'Y(90deg)', 'X(50%)', 'Y(45deg)'],
    right: ['100% 50%', 'X(-100%)', 'Y(-90deg)', 'X(-50%)', 'Y(-45deg)'],
    top: ['50% 0%', 'Y(100%)', 'X(-90deg)', 'Y(50%)', 'X(-45deg)'],
    bottom: ['50% 100%', 'Y(-100%)', 'X(90deg)', 'Y(-50%)', 'X(45deg)'],
  };

  const animationName = `${name}--react-tiger-transition-cube-in`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transform0 = `translate${config[direction][1]} rotate${config[direction][2]}`;
  const transform50 = `translate${config[direction][3]} translateZ(${-depth}px) rotate${config[direction][4]}`;

  const style = `
  .${name}-enter {
    transform-origin: ${transformOrigin};
    z-index: ${zIndex};
    opacity: ${opacity};
  }
  .${name}-enter-active {
    animation: ${animationCss};
    animation-delay: ${delay}ms;
  }
  @keyframes ${animationName} {
    0% {
      opacity: ${opacity};
      transform: ${transform0};
    }
    50% {
      transform: ${transform50};
      animation-timing-function: ease-out;
    }
    100% {
      opacity: 1;
    }
  }
  `;

  return style;

};
