import { buildTransitionIn } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  angle = 90,
  delay = 0,
} = {}) => {

  /* eslint-disable no-param-reassign */
  if (angle > 90) angle = 90;
  else if (angle < 0) angle = 0;
  /* eslint-enable */

  const config = {
    left: ['0% 50%', `translateX(100%) rotateY(${-angle}deg)`, 'X', 'Y'],
    right: ['100% 50%', `translateX(-100%) rotateY(${angle}deg)`, 'X', 'Y'],
    top: ['50% 0%', `translateY(100%) rotateX(${angle}deg)`, 'Y', 'X'],
    bottom: ['50% 100%', `translateY(-100%) rotateX(${-angle}deg)`, 'Y', 'X'],
  };

  const animationName = `${direction}ReactTigerTransitionRoomIn`;
  const transformOrigin = config[direction][0];
  let transform = config[direction][1];
  const animationCss = `${animationName} ${duration}ms both ${getEasing(easing)}`;

  const style = `
  .react-tiger-transition-room-in-${direction} {
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
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionIn({
    rules,
    replaceBackground,
    className: `react-tiger-transition-room-in-${direction}`,
  });
};
