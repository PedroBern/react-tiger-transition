import { stringify } from "javascript-stringify";
import tigers from './tigers';
import computeTimeout from './computeTimeout';

export const initialState = {
  tiger: tigers[0],
  tigers: tigers,

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
    console.error(error);
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
      timeout = computeTimeout(args, args.enter, args.exit);
      return { ...state, tiger, args, strArgs, timeout };

    // editor
    case 'onBeforeChange':
      return { ...state, strArgs: action.value };

    // editor
    case 'onChange':
      args = getArgs(action.value);
      timeout = computeTimeout(args, args.enter, args.exit);

      if (args) {
        try {
          state.tiger.func({
            name: state.tiger.name + '-demo',
            ...args
          })
        }
        catch (e) {
          console.log(e);
        }
      }
      return args ? { ...state, args, timeout } : { ...state }

    case 'updateDemoTimeout':
      return { ...state, timeout: action.value };

    default:
      throw new Error();

  }
}
