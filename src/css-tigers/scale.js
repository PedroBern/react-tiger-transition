import { styleInject } from '../utils';
import scaleIn from './transitions/scaleIn';
import scaleOut from './transitions/scaleOut';

export const scale = ({
  enter = {},
  exit = {},
  name = 'scale',
  ...other
} = {}) => {

  const enterArgs = {
    delay: 300,
    zIndex: 2,
    opacity: 0,
    ...enter,
  };

  const exitArgs = {
    zIndex: 1,
    opacity: 0,
    ...exit,
  };

  const commonArgs = {
    duration: 300
  };

  styleInject(scaleIn({
    name,
    ...commonArgs,
    ...enterArgs,
    ...other
  }), `${name}-enter`);
  styleInject(scaleOut({
    name,
    ...commonArgs,
    ...exitArgs,
    ...other
  }), `${name}-exit`);
};
