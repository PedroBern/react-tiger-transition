import { buildTransitionIn } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  duration = 700,
  easing = 'ease',
  opacity = 1,
  scale = 0.8,
  replaceBackground = null,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const animationName = 'ReactTigerTransitionScaleIn';

  const style = `
  .react-tiger-transition-scale-in {
    -webkit-transform: scale(${scale});
    -ms-transform: scale(${scale});
    transform: scale(${scale});
    -webkit-animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
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
    className: `react-tiger-transition-scale-in`,
  });
};
