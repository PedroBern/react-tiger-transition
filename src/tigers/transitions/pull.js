import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease',
  opacity=1,
  angle=90,
  replaceBackground=null,
  zIndex=2,
  fillMode='both',
  delay=0,
}={}) => {

  const config = {
    left: ['100% 50%', 'Y',`(${-angle}deg)` ],
    right: ['0% 50%', 'Y', `(${angle}deg)` ],
    bottom: ['50% 0%', 'X',`(${-angle}deg)` ],
    top: ['50% 100%', 'X', `(${angle}deg)` ],
  }

  const transformOrigin = `${config[direction][0]}`;
  let rotate = `rotate${config[direction][1]}${config[direction][2]}`;
  const animationName = `${direction}ReactTigerTransitionPull`;
  const animationCss = `${animationName} ${duration}ms ${easing} ${fillMode}`;

  const style = `
  .react-tiger-transition-pull-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-transform: ${rotate};
    -ms-transform: ${rotate};
    transform: ${rotate};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `
  rotate = `rotate${config[direction][1]}(0deg)}`

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${rotate};
      transform: ${rotate};
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${rotate};
      transform: ${rotate};
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
    className: `react-tiger-transition-pull-${direction}`,
  })
}
