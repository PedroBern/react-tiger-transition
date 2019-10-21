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
}={}) => {

  const config = {
    left: {
      to: '100% 50%',
      trans: ['X', '(-100%)'],
      rot: ['Y', `(${-angle}deg)`],
    },
    right: {
      to: '0% 50%',
      trans: ['X', '(100%)'],
      rot: ['Y', `(${angle}deg)`],
    },
    top: {
      to: '50% 100%',
      trans: ['Y', '(-100%)'],
      rot: ['X',`(${angle}deg)`],
    },
    bottom: {
      to: '50% 0%',
      trans: ['Y', '(100%)'],
      rot: ['X', `(${-angle}deg)`],
    },
  }

  const transformOrigin = config[direction].to;
  const animationName = `${direction}ReactTigerTransitionFold`;
  const animationCss = `${animationName} ${duration}ms ${easing} both`

  const style = `
  .react-tiger-transition-fold-${direction} {
    -webkit-transform-origin:${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const translate = `translate${config[direction].trans[0]}${config[direction].trans[1]}`;
  const rotate = `rotate${config[direction].rot[0]}${config[direction].rot[1]}`
  const transform = `${translate} ${rotate}`;

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
    className: `react-tiger-transition-fold-${direction}`,
  })
}
