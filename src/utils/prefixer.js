/**
 *  basic css processor for tiger
 *  designed only for css written in tigers folder
 *
 */

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
  {
    name: 'animation',
    prefixes: ['-webkit-']
  },
  {
    name: 'animation-delay',
    prefixes: ['-webkit-']
  },
  {
    name: 'animation-timing-function',
    prefixes: ['-webkit-']
  }
];


export const prefixer = (string, sep = '\n') => {
  let prefixedString = string;
  let regex = /(?<property>[a-z-]+) *:(?<value>[^:;]+;)/gm;
  let match;
  while (match = regex.exec(string)) {// eslint-disable-line
    const prefix = prefixes.filter(p => p.name === match.groups.property)[0];// eslint-disable-line
    if (prefix) {
      let prefixedProperty = '';
      prefix.prefixes.map((p, i) => {// eslint-disable-line
        // insert tab after first line to keep it pretty
        prefixedProperty += `${i > 0 ? '\t' : ''}${p}${match[0]}${sep}`;
      });
      prefixedProperty += `\t${match[0]}`;
      prefixedString = prefixedString.replace(match[0], prefixedProperty);
    }
  }

  // test for @keyframes
  // keyframes are always last item
  regex = /keyframes.*}/gs;
  match = regex.exec(prefixedString);
  if (match) {
    prefixedString += `@-webkit-${match[0]}`;
  }

  return prefixedString;
};
