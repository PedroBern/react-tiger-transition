import { buildTransitionIn } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  direction = 'top',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  replaceBackground = null,
  zIndex = 2,
  scale = 1,
  delay = 0,
} = {}) => {

  const config = {
    right: [-100, 'X'],
    left: [100, 'X'],
    bottom: [-100, 'Y'],
    top: [100, 'Y'],
  };

  const animationName = `${direction}ReactTigerTransitionShuffleIn`;
  let transform = `scale(${scale}) translate${config[direction][1]}(${config[direction][0]}%)`;
  const animationCss = `${animationName} ${duration}ms ${getEasing(easing)} both`;

  const style = `
  .react-tiger-transition-glide-shuffle-in-${direction} {
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
  `;

  transform = `translate${config[direction][1]}(0px) scale(1)`;

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
    className: `react-tiger-transition-glide-shuffle-in-${direction}`,
  });
};
