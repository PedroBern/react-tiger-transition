import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease',
  opacity=1,
  angle=90,
  replaceBackground=null,
  zIndex=1,
  fillMode='both',
}={}) => {

  const config = {
    right: ['100% 50%', 'Y', `(${-angle}deg)`],
    left: ['0% 50%', 'Y', `(${angle}deg)`],
    top: ['50% 0%', 'X', `(${-angle}deg)`],
    bottom: ['50% 100%', 'X', `(${angle}deg)`],
  }

  const transformOrigin = config[direction][0];
  const animationName = `${direction}ReactTigerTransitionPush`;
  const animationCss = `${animationName} ${duration}ms ${easing} ${fillMode}`

  const style = `
  .react-tiger-transition-push-${direction} {
    -webkit-transform-origin:${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const transform = `rotate${config[direction][1]}${config[direction][2]}`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: ${opacity};
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: ${opacity};
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return buildTransitionOut({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-push-${direction}`,
  })
}
