var fs = require('fs');

import  { stringify } from 'javascript-stringify';

import glide from 'tigers/glide';
import glideIn from 'tigers/glideIn';
import glideOut from 'tigers/glideOut';
import rise from 'tigers/rise';
import drop from 'tigers/drop';
import shuffle from 'tigers/shuffle';
import fold from 'tigers/fold';
import unfold from 'tigers/unfold';
import push from 'tigers/push';
import pull from 'tigers/pull';
import pushPull from 'tigers/pushPull';
import fade from 'tigers/fade';
import scale from 'tigers/scale';
import flip from 'tigers/flip';
import slide from 'tigers/slide';
import cube from 'tigers/cube';
import room from 'tigers/room';
import carousel from 'tigers/carousel';
import side from 'tigers/side';
import glueOut from 'tigers/glueOut';
import glueIn from 'tigers/glueIn';

const rawTigers = {
 glide,
 glideIn,
 glideOut,
 rise,
 drop,
 shuffle,
 fold,
 unfold,
 push,
 pull,
 pushPull,
 fade,
 scale,
 flip,
 slide,
 cube,
 room,
 carousel,
 side,
 glueOut,
 glueIn,
};

/*
 *  extract tigers default args from raw js file
 *  all tigers were written on the following format:
 *  buildTiger(
 *    // common
 *    { ...args },
 *    // enter
 *    { ...args },
 *    functionInRules,
 *    // exit
 *    { ...args },
 *    functionOutRules,
 *  );
 */
const extractArgs = raw => {
  let common = raw.split('common')[1]
  let enter = common.split('enter')[1]
  let exit = enter.split('exit')[1]

  common = common.replace(enter, '')
  enter = enter.replace(exit, '')

  // issue on babel dont allow me to use positive lookbehind,
  // same issue as https://github.com/babel/babel/issues/8951
  // so I need to manulay remove the first '{'
  const regex = /.*(?=\})/gms

  let args = {
    common: common.match(regex)[0].replace('{', ''),
    enter: enter.match(regex)[0].replace('{', ''),
    exit: exit.match(regex)[0].replace('{', ''),
  };

  Object.keys(args).map(key => {
    const pairs = args[key].split(',');
    let objArgs = {}
    pairs.map(p => {
      const values = p.split(':')
      if (values[0] && values[1])
      objArgs[values[0].trim()] = eval(values[1].trim());
    })
    args[key] = objArgs;
  })

  return {
    ...args.common,
    enter: {...args.enter},
    exit: {...args.exit}
  }
}

const tigersArgs = Object.keys(rawTigers).map(key => ({
  name: key,
  args: {...extractArgs(rawTigers[key])}
}));

const generateTigersMarkdown = transitions => {
  var markdownString = '# Default Transitions\n\n';
  transitions.map(t => {
    var tigerString = `## ${t.name}\n\n` +
    "```javascript" +
    "\n" +
    `// ${t.name}` +
    "\n" +
    `const ${t.name}DefaultArgs = ` +
    stringify(t.args, null, '\t') +
    "\n" +
    `const ${t.name}Default = () => ${t.name}({...${t.name}DefaultArgs});` +
    "\n```" +
    "\n\n"

    markdownString += tigerString;
  })

  return markdownString
}

const transitionsAPI = generateTigersMarkdown([...tigersArgs].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}));

const jsonArgs = {
  defaultArgs: [
    ...tigersArgs
  ]
};

fs.writeFileSync('documentation/assets/generatedTigersArgs.json', JSON.stringify(jsonArgs, null, 2));
process.stdout.write('tigers default args as json' + ' -> ' + 'documentation/assets/generatedTigersArgs.md\n');
fs.writeFileSync('documentation/assets/tigersAPI.md', transitionsAPI);
process.stdout.write('tigers API' + ' -> ' + 'documentation/assets/tigersAPI.md\n');
