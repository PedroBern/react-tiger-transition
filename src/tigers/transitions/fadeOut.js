import { buildTransitionOut } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  duration = 700,
  easing = 'ease',
  opacity = 0,
  replaceBackground = null,
  zIndex = 1,
} = {}) => {

  const animationName = 'ReactTigerTransitionFadeOut';

  const style = `
  .react-tiger-transition-fade-out {
    -webkit-animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    z-index: ${zIndex};
    opacity: 1;
  }
  `;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: ${opacity};
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: ${opacity};
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
    className: `react-tiger-transition-fade-out`,
  });
};
