import { buildTransitionOut } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 2,
  depth = 500,
  offset = 200,
} = {}) => {

  const config = {
    left: `X(${-offset}%)`,
    right: `X(${offset}%)`,
    top: `Y(${-offset}%)`,
    bottom: `Y(${offset}%)`,
  };


  const animationName = `${direction}ReactTigerTransitionSlideOut`;
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;

  const style = `
  .react-tiger-transition-slide-out-${direction} {
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `;

  const transform25 = `translateZ(${-depth}px)`;
  const transform75 = `translateZ(${-depth}px) translate${config[direction]}`;
  const transform100 = `translateZ(${-depth}px) translate${config[direction]}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    25% {
      opacity: ${opacity};
      -webkit-transform: ${transform25};
      transform: ${transform25};
    }
    75% {
      opacity: ${opacity};
      -webkit-transform: ${transform75};
      transform: ${transform75};
    }
    100% {
      opacity: ${opacity};
      -webkit-transform: ${transform100};
      transform: ${transform100};
    }
  }
  @keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    25% {
      opacity: ${opacity};
      -webkit-transform: ${transform25};
      transform: ${transform25};
    }
    75% {
      opacity: ${opacity};
      -webkit-transform: ${transform75};
      transform: ${transform75};
    }
    100% {
      opacity: ${opacity};
      -webkit-transform: ${transform100};
      transform: ${transform100};
    }
  }
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionOut({
    rules,
    replaceBackground,
    className: `react-tiger-transition-slide-out-${direction}`,
  });
};
