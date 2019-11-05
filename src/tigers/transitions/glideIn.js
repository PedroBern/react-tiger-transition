import { getEasing } from '../../utils';

export default ({
  name = 'glide',
  direction = 'left',
  duration = 600,
  easing = 'ease',
  opacity = 1,
  zIndex = 2,
  delay = 0,
  scale = 1,
} = {}) => {

  const config = {
    right: [-100, 'X'],
    left: [100, 'X'],
    bottom: [-100, 'Y'],
    top: [100, 'Y'],
  };

  const transform = `scale(${scale}) translate${config[direction][1]}(${config[direction][0]}%)`;
  const transformActive = `scale(1) translate${config[direction][1]}(0px)`;
  const transition = `transform, opacity`;

  const style = `
  .${name}-enter {
    transform: ${transform};
    z-index: ${zIndex};
    opacity: ${opacity};
  }
  .${name}-enter-active {
    transform: ${transformActive};
    opacity: 1;
    transition: ${transition};
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `;

  return style;

};
