const prefixes = [
  {
    name: 'transform',
    prefixes: ['-webkit-', '-ms-']
  },
  {
    name: 'transition',
    prefixes: ['-o-', '-webkit-']
  },
  {
    name: 'transition-delay',
    prefixes: ['-o-', '-webkit-']
  },
  {
    name: 'transition-duration',
    prefixes: ['-o-', '-webkit-']
  },
  {
    name: 'transition-timing-function',
    prefixes: ['-o-', '-webkit-']
  },
  {
    name: 'transform-origin',
    prefixes: ['-ms-', '-webkit-']
  },
];


export default (string, sep = '\n') => {
  let prefixedString = string;
  const regex = /(?<property>[a-z-]+) *:(?<value>[^:;]+;)/gm;
  let match;
  while (match = regex.exec(string)) {// eslint-disable-line
    const prefix = prefixes.filter(p => p.name === match.groups.property)[0];// eslint-disable-line
    if (prefix) {
      let prefixedProperty = '';
      prefix.prefixes.map(p => {// eslint-disable-line
        prefixedProperty += p + match[0] + sep;
      });
      prefixedProperty += match[0];
      prefixedString = prefixedString.replace(match[0], prefixedProperty);
    }
  }
  return prefixedString;
};
