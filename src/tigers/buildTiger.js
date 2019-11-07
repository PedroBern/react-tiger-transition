import { styleInject } from '../utils';

export default (
  argsInit,
  enterInit,
  enterTransition,
  exitInit,
  exitTransition,
) => ({
  name = '',
  enter = {},
  exit = {},
  ...args
} = {}) => {

  styleInject(enterTransition({
    name,
    ...enterInit,
    ...enter,
    ...argsInit,
    ...args
  }), `${name}-enter`);

  styleInject(exitTransition({
    name,
    ...exitInit,
    ...exit,
    ...argsInit,
    ...args
  }), `${name}-exit`);

};
