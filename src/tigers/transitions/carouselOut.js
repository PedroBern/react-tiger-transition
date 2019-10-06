import { baseOut } from './base';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=2,
  depth=500,
  offset=300,
  angle=65,
  scale=0.4,
  fillMode='both',
}={}) => {

  const config = {
    left: ['100% 50%', `translateX(${-offset}%) rotateY(${-angle}deg)`],
    right: ['0% 50%', `translateX(${offset}%) rotateY(${angle}deg)`],
    top: ['50% 100%', `translateY(${-offset}%) rotateX(${angle}deg)`],
    bottom: ['50% 0%', `translateY(${offset}%) rotateX(${-angle}deg)`],
  }

  const animationName = `${direction}ReactTigerTransitionCarouselOut`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms ${fillMode} ${easing}`;

  const style = `
  .react-tiger-transition-carousel-out-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const transform = `${config[direction][1]} scale(${scale})`;

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

  return baseOut({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-carousel-out-${direction}`,
  })
}
