import { styleInject } from './utils/styleInject';
import glideIn from './transitions/glideIn';
import glideOut from './transitions/glideOut';

export const glide = ({
  enter = {},
  exit = {},
  name = 'glide',
  ...other
} = {}) => {
  styleInject(glideIn({ name, ...enter, ...other }), name);
  styleInject(glideOut({ name, ...exit, ...other }), name);
};
