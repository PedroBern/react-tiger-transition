import { stringify } from "javascript-stringify";

import tigersArr from './tigersArr';



const buildTransitionsAPI = transitions => {
  var markdownString = '# Default Transitions\n\n';
  transitions.map(t => {
    const tigerString = `## ${t.name}\n\n` +
    "```javascript" +
    "\n" +
    `// ${t.name}` +
    "\n" +
    `const ${t.name}DefaultArgs = ` +
    stringify(t.args, null, '\t') +
    "\n" +
    `const ${t.name}Default = () => ${t.name}({...default${t.name}Args});` +
    "\n```" +
    "\n\n"

    markdownString += tigerString;
  })

  return markdownString
}

const transitionsAPI = buildTransitionsAPI([...tigersArr].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}));

export default transitionsAPI;
