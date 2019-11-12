import { getEasing } from '../../utils';


export default ({
  name = 'cube',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 2,
  depth = 200,
  delay = 0,
} = {}) => {

  const config = {
    left: ['100% 50%', 'X(-50%)', 'Y(-45deg)', 'X(-100%)', 'Y(-90deg)'],
    right: ['0% 50%', 'X(50%)', 'Y(45deg)', 'X(100%)', 'Y(90deg)'],
    top: ['50% 100%', 'Y(-50%)', 'X(45deg)', 'Y(-100%)', 'X(90deg)'],
    bottom: ['50% 0%', 'Y(50%)', 'X(-45deg)', 'Y(100%)', 'X(-90deg)'],
  };

  const animationName = `${name}--react-tiger-transition-cube-out`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transform50 = `translate${config[direction][1]} translateZ(${-depth}px) rotate${config[direction][2]}`;
  const transform100 = `translate${config[direction][3]} rotate${config[direction][4]}`;

  const style = `
  .${name}-exit {
    transform-origin: ${transformOrigin};
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
    50% {
      transform: ${transform50};
      animation-timing-function: ease-out;
    }
    100% {
      opacity: ${opacity};
      transform: ${transform100};
    }
  }
  `;

  return style;

};
