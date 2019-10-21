import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  duration=700,
  easing='ease',
  opacity=0,
  replaceBackground=null,
  zIndex=1,
  fillMode='both',
}={}) => {

  const animationName = 'ReactTigerTransitionFadeOut';

  const style = `
  .react-tiger-transition-fade-out {
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
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: ${opacity};
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
    className: `react-tiger-transition-fade-out`,
  })
}
