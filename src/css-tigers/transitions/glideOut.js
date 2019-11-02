import { prefixer, getEasing } from '../utils';

export default ({
  name = 'glide-out',
  direction = 'left',
  duration = 700,
  easing = 'ease',
  opacity = 1,
  zIndex = 1,
  delay = 0,
  scale = 1,
  overridesName = null,
} = {}) => {

  const config = {
    left: [-100, 'X'],
    right: [100, 'X'],
    top: [-100, 'Y'],
    bottom: [100, 'Y'],
  };

  const computeName = overridesName || `${name}-${direction}`;
  const transformActive = `scale(${scale}) translate${config[direction][1]}(${config[direction][0]}%)`;
  const transition = `transform, opacity`;

  const style = prefixer(`
  .${computeName}-exit {
    z-index: ${zIndex};
  }
  .${computeName}-exit-active {
    transform: ${transformActive};
    opacity: ${opacity};
    transition: ${transition};
    transition-delay: ${delay}ms;
    transition-duration: ${duration}ms;
    transition-timing-function: ${getEasing(easing)};
  }
  `);

  return style;
};
