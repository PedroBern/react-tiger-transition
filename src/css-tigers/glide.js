import { styleInject } from '../utils';
import glideIn from './transitions/glideIn';
import glideOut from './transitions/glideOut';

export const glide = ({
  enter = {},
  exit = {},
  name = 'glide',
  ...other
} = {}) => {
  styleInject(glideIn({ name, ...enter, ...other }), `${name}-enter`);
  styleInject(glideOut({ name, ...exit, ...other }), `${name}-exit`);
};
