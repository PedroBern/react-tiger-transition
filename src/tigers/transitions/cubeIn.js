import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=1,
  depth=200,
  delay=0,
}={}) => {

  const config = {
    left: ['0% 50%', 'X(100%)', 'Y(90deg)', 'X(50%)', 'Y(45deg)'],
    right: ['100% 50%', 'X(-100%)', 'Y(-90deg)', 'X(-50%)', 'Y(-45deg)'],
    top: ['50% 0%', 'Y(100%)', 'X(-90deg)', 'Y(50%)', 'X(-45deg)'],
    bottom: ['50% 100%', 'Y(-100%)', 'X(90deg)', 'Y(-50%)', 'X(45deg)'],
  }

  const animationName = `${direction}ReactTigerTransitionCubeIn`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms both ${easing}`

  const style = `
  .react-tiger-transition-cube-in-${direction} {
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
  `
  const transform0 = `translate${config[direction][1]} rotate${config[direction][2]}`;
  const transform50 = `translate${config[direction][3]} translateZ(${-depth}px) rotate${config[direction][4]}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    0% {
      opacity: ${opacity};
      -webkit-transform: ${transform0};
      transform: ${transform0};
    }
    50% {
      animation-timing-function: ease-out;
      -webkit-transform: ${transform50};
      transform: ${transform50};
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes ${animationName} {
    0% {
      opacity: ${opacity};
      -webkit-transform: ${transform0};
      transform: ${transform0};
    }
    50% {
      animation-timing-function: ease-out;
      -webkit-transform: ${transform50};
      transform: ${transform50};
    }
    100% {
      opacity: 1;
    }
  }
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return buildTransitionIn({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-cube-in-${direction}`,
  })
}
