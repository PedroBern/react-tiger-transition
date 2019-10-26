import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  replaceBackground = null,
  zIndex = 1,
} = {}) => {

  const config = {
    left: [-100, 'X'],
    right: [100, 'X'],
    top: [-100, 'Y'],
    bottom: [100, 'Y'],
  };

  const animationName = `${direction}ReactTigerTransitionGlideOut`;
  const animationCss = `${animationName} ${duration}ms ${easing} both`;

  const style = `
  .react-tiger-transition-glide-out-${direction} {
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `;

  const transform = `translate${config[direction][1]}(${config[direction][0]}%)`;

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
    className: `react-tiger-transition-glide-out-${direction}`,
  });
};
