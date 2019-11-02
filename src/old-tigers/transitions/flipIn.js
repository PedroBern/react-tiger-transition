import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 500,
  easing = 'ease-out',
  opacity = 0.2,
  replaceBackground = null,
  zIndex = 1,
  depth = 1000,
} = {}) => {

  const delay = duration;

  const config = {
    left: {
      style: `translateZ(${-depth}px) rotateY(-90deg)`,
      animation: 'translateZ(0px) rotateY(0deg)'
    },
    right: {
      style: `translateZ(${-depth}px) rotateY(90deg)`,
      animation: 'translateZ(0px) rotateY(0deg)'
    },
    top: {
      style: `translateZ(${-depth}px) rotateX(-90deg)`,
      animation: 'translateZ(0px) rotateX(0deg)'
    },
    bottom: {
      style: `translateZ(${-depth}px) rotateX(90deg)`,
      animation: 'translateZ(0px) rotateX(0deg)'
    }
  };

  const animationName = `${direction}ReactTigerTransitionCubeIn`;
  const transformOrigin = '50% 50%';
  let transform = config[direction].style;
  const animationCss = `${animationName} ${duration}ms both ${easing}`;

  const style = `
  .react-tiger-transition-cube-in-${direction} {
    -webkit-transform: ${transform};
    -ms-transform: ${transform};
    transform: ${transform};
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

  transform = config[direction].animation;

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
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionIn({
    rules,
    replaceBackground,
    className: `react-tiger-transition-cube-in-${direction}`,
  });
};
