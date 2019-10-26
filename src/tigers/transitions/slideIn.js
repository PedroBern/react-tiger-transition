import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
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

  const animationName = `${direction}ReactTigerTransitionSlideIn`;
  const animationCss = `${animationName} ${duration}ms both ${easing}`;

  const style = `
  .react-tiger-transition-slide-in-${direction} {
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `;
  const transform0 = `translateZ(${-depth}px) translate${config[direction]}`;
  const transform75 = `translateZ(${-depth}px)`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0%, 25% {
      opacity: ${opacity};
      -webkit-transform: ${transform0};
      transform: ${transform0};
    }
    75% {
      opacity: ${opacity};
      -webkit-transform: ${transform75};
      transform: ${transform75};
    }
    100% {
      opacity: 1;
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
  }
  @keyframes ${animationName} {
    0%, 25% {
      opacity: ${opacity};
      -webkit-transform: ${transform0};
      transform: ${transform0};
    }
    75% {
      opacity: ${opacity};
      -webkit-transform: ${transform75};
      transform: ${transform75};
    }
    100% {
      opacity: 1;
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
    }
  }
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionIn({
    rules,
    replaceBackground,
    className: `react-tiger-transition-slide-in-${direction}`,
  });
};
