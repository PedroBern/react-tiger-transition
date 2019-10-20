import { stringify } from "javascript-stringify";

import { getArgs, tigersArr } from '../utils';

// tigersArr.map(tiger => {
//   tiger.args = extractArgs(tiger.raw);
// })

export const initialState = {
  tiger: tigersArr[0],
  tigers: tigersArr,

  // values used on demo transitions
  args: tigersArr[0].args,

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
      return args ? { ...state, args } : { ...state }

    case 'onChangeFromObj':
      console.log('called');
      args = action.value;
      console.log(args);
      return args ? { ...state, args } : { ...state }

    default:
      throw new Error();
  }
}
