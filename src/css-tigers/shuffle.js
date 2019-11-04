import { styleInject } from '../utils';
import glideIn from './transitions/glideIn';
import glideOut from './transitions/glideOut';

const opositeDirection = d => (
  d === 'left' ? 'right'
    : d === 'right' ? 'left'
      : d === 'top' ? 'bottom'
        : d === 'bottom' ? 'top'
          : null
);

export const shuffle = ({
  enter = {},
  exit = {},
  name = 'shuffle',
  ...other
} = {}) => {

  const outDirection = other.direction ? opositeDirection(other.direction)
    : enter.direction ? opositeDirection(enter.direction)
      : !exit.direction ? 'right'
        : exit.direction;

  styleInject(glideIn({ name, ...enter, ...other }), name);
  styleInject(glideOut({
    name,
    ...exit,
    ...other,
    direction: outDirection
  }), name);
};
