import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease',
  opacity=1,
  replaceBackground=null,
  zIndex=2,
  fillMode='both',
  delay=0,
}={}) => {

  const config = {
    right: [-100, 'X'],
    left: [100, 'X'],
    bottom: [-100, 'Y'],
    top: [100, 'Y'],
  }

  const animationName = `${direction}ReactTigerTransitionGlideIn`;
  let transform = `translate${config[direction][1]}(${config[direction][0]}%)`;
  const animationCss = `${animationName} ${duration}ms ${easing} ${fillMode}`

  const style = `
  .react-tiger-transition-glide-in-${direction} {
    -webkit-transform: ${transform};
    -ms-transform: ${transform};
    transform: ${transform};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `

  transform = `translate${config[direction][1]}(0px)`;

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
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return buildTransitionIn({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-glide-in-${direction}`,
  })
}
