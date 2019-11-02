import { buildTransitionOut } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  direction = 'left',
  duration = 500,
  easing = 'ease-in',
  opacity = 0.2,
  replaceBackground = null,
  zIndex = 2,
  depth = 1000,
} = {}) => {

  const config = {
    left: `translateZ(${-depth}px) rotateY(90deg)`,
    right: `translateZ(${-depth}px) rotateY(-90deg)`,
    top: `translateZ(${-depth}px) rotateX(90deg)`,
    bottom: `translateZ(${-depth}px) rotateX(-90deg)`,
  };

  const animationName = `${direction}ReactTigerTransitionCubeOut`;
  const transformOrigin = '50% 50%';
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;

  const style = `
  .react-tiger-transition-flip-out-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `;

  const transform = config[direction];

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
    className: `react-tiger-transition-flip-out-${direction}`,
  });
};
