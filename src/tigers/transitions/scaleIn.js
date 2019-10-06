import { baseIn } from './base';

import { InjectStyle } from '../../utils';

export default ({
  duration=700,
  easing='ease',
  opacity=1,
  scale=0.8,
  replaceBackground=null,
  zIndex=1,
  fillMode='ease',
  delay=0,
}={}) => {

  const animationName = 'ReactTigerTransitionScaleIn'

  const style = `
  .react-tiger-transition-scale-in {
    -webkit-transform: scale(${scale});
    -ms-transform: scale(${scale});
    transform: scale(${scale});
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
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return baseIn({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-scale-in`,
  })
}
