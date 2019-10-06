import { baseIn } from './base';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=1,
  fillMode='both',
  depth=500,
  angle=90,
  offset=100,
  delay=0,
}={}) => {

  const config = {
    left: [`${50 + offset}% 50%`,`translateZ(${-depth}px) rotateY(${-angle}deg)`, 'X','Y'],
    right: [`${-(50 + offset)}% 50%`,`translateZ(${depth}px) rotateY(${angle}deg)`, 'X','Y'],
    top: [`50% ${50 + offset}%`,`translateZ(${-depth}px) rotateX(${angle}deg)`, 'Y','X'],
    bottom: [`50% ${-(50 + offset)}%`,`translateZ(${-depth}px) rotateX(${-angle}deg)`, 'Y','X'],
  }

  const animationName = `${direction}ReactTigerTransitionSideIn`;
  const transformOrigin = config[direction][0];
  let transform = `${config[direction][1]}`;
  const animationCss = `${animationName} ${duration}ms ${fillMode} ${easing}`

  const style = `
  .react-tiger-transition-side-in-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-transform: ${transform};
    -ms-transform: ${transform};
    transform: ${transform};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `
  transform = `translate${config[direction][2]}(0px) rotate${config[direction][3]}(0deg)`;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: ${transform};
      transform: ${transform};
    }
  }
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return baseIn({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-side-in-${direction}`,
  })
}
