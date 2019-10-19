// extract tigers default args from raw js file

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

export default extractArgs;
