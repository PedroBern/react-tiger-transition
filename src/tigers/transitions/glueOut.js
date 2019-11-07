import { getEasing } from '../../utils';

export default ({
  name = 'glue',
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  zIndex = 1,
  depth = 200,
  angle = 15,
  delay = 0,
} = {}) => {

  const config = {
    left: ['0% 50%', `Y(${angle}deg)`],
    right: ['100% 50%', `Y(${-angle}deg)`],
    top: ['50% 100%', `X(${angle}deg)`],
    bottom: ['50% 0%', `X(${-angle}deg)`],
  };

  const animationName = `${name}--react-tige-transition-glue-out`;
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transformOrigin = config[direction][0];
  const transform40 = `rotate${config[direction][1]}`;
  const transform100 = `translateZ(${-depth}px)`;

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
    40% {
      transform: ${transform40};
    }
    100% {
      transform: ${transform100};
      opacity: ${opacity};
    }
  }
  `;

  return style;

};
