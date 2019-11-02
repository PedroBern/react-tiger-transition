import { buildTransitionIn } from './buildTransition';

import { InjectStyle } from '../../utils';

export default ({
  direction = 'left',
  duration = 700,
  easing = 'ease-in',
  opacity = 0.3,
  replaceBackground = null,
  zIndex = 1,
  offset = 300,
  angle = 65,
  scale = 0.4,
  delay = 0,
} = {}) => {

  const config = {
    left: ['0% 50%', `translateX(${offset}%) rotateY(${angle}deg)`, 'X', 'Y'],
    right: ['100% 50%', `translateX(${-offset}%) rotateY(${-angle}deg)`, 'X', 'Y'],
    top: ['50% 0%', `translateY(${offset}%) rotateX(${-angle}deg)`, 'Y', 'X'],
    bottom: ['50% 100%', `translateY(${-offset}%) rotateX(${angle}deg)`, 'Y', 'X'],
  };

  const animationName = `${direction}ReactTigerTransitionCarouselIn`;
  const transformOrigin = config[direction][0];
  let transform = `${config[direction][1]} scale(${scale})`;
  const animationCss = `${animationName} ${duration}ms both ${easing}`;

  const style = `
  .react-tiger-transition-carousel-in-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
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

  transform = `translate${config[direction][2]}(0px) rotate${config[direction][3]}(0deg) scale(1)`;

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
    className: `react-tiger-transition-carousel-in-${direction}`,
  });
};
