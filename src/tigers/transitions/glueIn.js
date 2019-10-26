import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
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

  const animationName = `${direction}ReactTigerTransitionGlueIn`;
  const animationCss = `${animationName} ${duration}ms both ${easing}`;
  const transformOrigin = config[direction][0];
  const transform0 = `translateZ(${-depth}px)`;

  const style = `
  .react-tiger-transition-glue-in-${direction} {
    -webkit-transform: ${transform0};
    -ms-transform: ${transform0};
    transform: ${transform0};
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `;
  const transform1 = `rotate${config[direction][1]}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0% {
      opacity: ${opacity};
      transform: ${transform0};
    }
    60% {
      -webkit-transform: ${transform1};
      transform: ${transform1};
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateZ(0px);
      transform: translateZ(0px);
      opacity: 1;
    }
  }
  @keyframes ${animationName} {
    0% {
      opacity: ${opacity};
      transform: ${transform0};
    }
    60% {
      -webkit-transform: ${transform1};
      transform: ${transform1};
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateZ(0px);
      transform: translateZ(0px);
      opacity: 1;
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
    className: `react-tiger-transition-glue-in-${direction}`,
  });
};
