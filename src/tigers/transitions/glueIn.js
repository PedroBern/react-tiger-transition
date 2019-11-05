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
    left: ['100% 50%', `Y(${-angle}deg)`],
    right: ['0% 50%', `Y(${angle}deg)`],
    top: ['50% 0%', `X(${-angle}deg)`],
    bottom: ['50% 100%', `X(${angle}deg)`],
  };

  const animationName = `${name}--react-tige-transition-glue-in`;
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;
  const transformOrigin = config[direction][0];
  const transform0 = `translateZ(${-depth}px)`;
  const transform1 = `rotate${config[direction][1]}`;

  const style = `
  .${name}-enter {
    transform-origin: ${transformOrigin};
    z-index: ${zIndex};
    opacity: ${opacity};
    transform: ${transform0};
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
    60% {
      transform: ${transform1};
    }
    100% {
      transform: translateZ(0px);
      opacity: 1;
    }
  }
  `;

  return style;

};
