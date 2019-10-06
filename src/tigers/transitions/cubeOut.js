import { baseOut } from './base';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=2,
  depth=200,
  fillMode='both',
}={}) => {

  const config = {
    left: ['100% 50%', 'X(-50%)', 'Y(-45deg)', 'X(-100%)', 'Y(-90deg)'],
    right: ['0% 50%', 'X(50%)', 'Y(45deg)', 'X(100%)', 'Y(90deg)'],
    top: ['50% 100%', 'Y(-50%)', 'X(45deg)', 'Y(-100%)', 'X(90deg)'],
    bottom:['50% 0%', 'Y(50%)', 'X(-45deg)', 'Y(100%)', 'X(-90deg)'],
  }

  const animationName = `${direction}ReactTigerTransitionCubeOut`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms ${fillMode} ${easing}`;

  const style = `
  .react-tiger-transition-cube-out-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const transform50 = `translate${config[direction][1]} translateZ(${-depth}px) rotate${config[direction][2]}`;
  const transform100 = `translate${config[direction][3]} rotate${config[direction][4]}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0% {
      opacity: 1;
    }
    50% {
      animation-timing-function: ease-out;
      -webkit-transform: ${transform50};
      transform: ${transform50};
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
    50% {
      animation-timing-function: ease-out;
      -webkit-transform: ${transform50};
      transform: ${transform50};
    }
    100% {
      opacity: ${opacity};
      -webkit-transform: ${transform100};
      transform: ${transform100};
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
    className: `react-tiger-transition-cube-out-${direction}`,
  })
}
