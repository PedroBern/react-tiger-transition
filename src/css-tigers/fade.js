import { styleInject } from '../utils';
import fadeIn from './transitions/fadeIn';
import fadeOut from './transitions/fadeOut';

export const fade = ({
  enter = {},
  exit = {},
  name = 'fade',
  ...other
} = {}) => {
  styleInject(fadeIn({ name, ...enter, ...other }), `${name}-enter`);
  styleInject(fadeOut({ name, ...exit, ...other }), `${name}-exit`);
};
