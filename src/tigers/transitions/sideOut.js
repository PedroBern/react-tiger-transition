import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 2,
  depth = 500,
  angle = 90,
  offset = 100,
} = {}) => {

  const config = {
    left: [`${50 - offset}% 50%`, `translateZ(${depth}px) rotateY(${angle}deg)`],
    right: [`${50 + offset}% 50%`, `translateZ(${-depth}px) rotateY(${-angle}deg)`],
    top: [`50% ${50 - offset}%`, `translateZ(${-depth}px) rotateX(${-angle}deg)`],
    bottom: [`50% ${50 + offset}%`, `translateZ(${-depth}px) rotateX(${angle}deg)`],
  };


  const animationName = `${direction}ReactTigerTransitionSideOut`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms both ${easing}`;

  const style = `
  .react-tiger-transition-side-out-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `;
  const transform = config[direction][1];

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
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionOut({
    rules,
    replaceBackground,
    className: `react-tiger-transition-side-out-${direction}`,
  });
};
