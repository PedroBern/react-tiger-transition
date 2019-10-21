import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  duration=700,
  easing='ease',
  opacity=1,
  scale=0.8,
  replaceBackground=null,
  zIndex=1,
  fillMode='both',
}={}) => {

  const animationName = 'ReactTigerTransitionScaleOut';

  const style = `
  .react-tiger-transition-scale-out {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-animation: ${animationName} ${duration}ms ${easing} ${fillMode};
    animation: ${animationName} ${duration}ms ${easing} ${fillMode};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: ${opacity};
      -webkit-transform: scale(${scale});
      transform: scale(${scale});
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: ${opacity};
      -webkit-transform: scale(${scale});
      transform: scale(${scale});
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
    className: `react-tiger-transition-scale-out`,
  })
}
