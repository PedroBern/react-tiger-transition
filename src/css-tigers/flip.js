import { styleInject } from '../utils';
import flipIn from './transitions/flipIn';
import flipOut from './transitions/flipOut';

export const flip = ({
  enter = {},
  exit = {},
  name = 'flip',
  ...other
} = {}) => {
  styleInject(flipIn({ name, ...enter, ...other }), name);
  styleInject(flipOut({ name, ...exit, ...other }), name);
};
