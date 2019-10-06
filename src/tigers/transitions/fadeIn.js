import { baseIn } from './base';

import { InjectStyle } from '../../utils';

export default ({
  duration=700,
  easing='ease',
  opacity=0,
  replaceBackground=null,
  zIndex=1,
  fillMode='ease',
  delay=0,
}={}) => {

  const animationName = 'ReactTigerTransitionFadeIn'

  const style = `
  .react-tiger-transition-fade-in {
    -webkit-animation: ${animationName} ${duration}ms ${easing} ${fillMode};
    animation: ${animationName} ${duration}ms ${easing} ${fillMode};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
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
    className: `react-tiger-transition-fade-in`,
  })
}
