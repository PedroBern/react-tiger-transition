import { stringify } from "javascript-stringify";
import { getArgs, tigersArr } from '../utils';

export const initialState = {
  tiger: tigersArr[0],
  tigers: tigersArr,

  // values used on demo transitions
  args: tigersArr[0].args,
  timeout: 600,

  // code-mirror editor text
  strArgs: `// ${tigersArr[0].name}\n` + stringify(tigersArr[0].args, null, '\t'),
}

export function reducer(state, action) {
  let args;

  switch (action.type) {

    case 'updateTiger':
      const tiger = tigersArr.filter(t => t.name == action.value)[0];
      const strArgs = `// ${tiger.name}\n` + stringify(tiger.args, null, '\t');
      args = tiger.args;
      return { ...state, tiger, args, strArgs };

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
          })
        }
        catch (e) {
          console.log(e);
        }
      }
      return args ? { ...state, args } : { ...state }

    case 'updateDemoTimeout':
      return { ...state, timeout: action.value };

    default:
      throw new Error();

  }
}
