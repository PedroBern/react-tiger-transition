import { buildTransitionOut } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction='top',
  duration=700,
  easing='ease',
  opacity=1,
  replaceBackground=null,
  scale=1,
  zIndex=1,
}={}) => {

  const config = {
    right: [-100, 'X'],
    left: [100, 'X'],
    bottom: [-100, 'Y'],
    top: [100, 'Y'],
  }

  const animationName = `${direction}ReactTigerTransitionShuffleOut`;
  const animationCss = `${animationName} ${duration}ms ${easing} both`;
  let transform = 'scale(1)';

  const style = `
  .react-tiger-transition-glide-shuffle-out-${direction} {
    -webkit-transform: ${transform};
    -ms-transform: ${transform};
    transform: ${transform};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  transform = `translate${config[direction][1]}(${config[direction][0]}%) scale(${scale})`;

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
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return buildTransitionOut({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-glide-shuffle-out-${direction}`,
  })
}
