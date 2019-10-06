import { baseOut } from './base';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=1,
  fillMode='both',
  depth=200,
  angle=15,
}={}) => {

  const config = {
    left: ['0% 50%', `Y(${angle}deg)`],
    right: ['100% 50%', `Y(${-angle}deg)`],
    top: ['50% 100%', `X(${angle}deg)`],
    bottom: ['50% 0%', `X(${-angle}deg)`],
  }

  const animationName = `${direction}ReactTigerTransitionGlueOut`;
  const animationCss = `${animationName} ${duration}ms ${fillMode} ${easing}`;
  const transformOrigin = config[direction][0];

  const style = `
  .react-tiger-transition-glue-out-${direction} {
    -webkit-transform-origin:${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `
  const transform40 = `rotate${config[direction][1]}`;
  const transform100 = `translateZ(${-depth}px)`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    40% {
      -webkit-transform: ${transform40};
      transform: ${transform40};
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: ${transform100};
      transform: ${transform100};
      opacity: ${opacity};
    }
  }
  @keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    40% {
      -webkit-transform: ${transform40};
      transform: ${transform40};
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: ${transform100};
      transform: ${transform100};
      opacity: ${opacity};
    }
  }
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return baseOut({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-glue-out-${direction}`,
  })
}
