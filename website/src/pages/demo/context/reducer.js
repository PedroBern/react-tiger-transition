import { stringify } from "javascript-stringify";
import tigers from './tigers';
import computeTimeout from './computeTimeout';

export const initialState = {
  tiger: tigers[0],
  tigers: tigers,

  // increse every time user changes codemirror successfully
  // to dispatch a snackbar
  newArgs: 0,
  failArgs: false,

  // values used on demo transitions
  args: tigers[0].args,
  timeout: 600,

  // code-mirror editor text
  strArgs: `// ${tigers[0].name}\n` + stringify(tigers[0].args, null, '\t'),
}

// get args from code mirror text
function getArgs(code) {
  try {
    const args = (new Function(`return (${code})`))();
    return Object.prototype.toString.call(args) === '[object Object]'
      ? args
      : false;
  } catch (error) {
    // console.error(error);
    return false
  }
}

export function reducer(state, action) {
  let args, timeout;

  switch (action.type) {

    case 'updateTiger':
      const tiger = state.tigers.filter(t => t.name == action.value)[0];
      const strArgs = `// ${tiger.name}\n` + stringify(tiger.args, null, '\t');
      args = tiger.args;
      timeout = computeTimeout(tiger.name, args, args.enter, args.exit);
      return { ...state, tiger, args, strArgs, timeout, newArgs: 0 };

    // editor
    case 'onBeforeChange':
      return { ...state, strArgs: action.value };

    // editor
    case 'onChange':
      args = getArgs(action.value);

      if (args) {
        try {
          state.tiger.func({
            name: state.tiger.name + '-demo',
            ...args
          });
          timeout = computeTimeout(state.tiger.name, args, args.enter, args.exit);
        }
        catch (e) {
          // console.log(e);
        }
      }
      return args
      ? {
        ...state,
        args,
        timeout,
        failArgs: false,
        newArgs: state.newArgs + 1
      }
      : { ...state, newArgs: state.newArgs + 1, failArgs: true }

    case 'updateDemoTimeout':
      return { ...state, timeout: action.value };

    default:
      throw new Error();

  }
}
