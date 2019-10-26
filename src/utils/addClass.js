// copy from
// https://github.com/react-bootstrap/dom-helpers/blob/master/src/hasClass.ts
// https://github.com/react-bootstrap/dom-helpers/blob/master/src/addClass.ts

export function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);

  return (
    ` ${element.className.baseVal || element.className} `.indexOf(
      ` ${className} `
    ) !== -1
  );
}

export function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) {
    /* eslint-disable-next-line no-param-reassign */
    if (typeof element.className === 'string') element.className = `${element.className} ${className}`;
    else {
      element.setAttribute(
        'class',
        `${(element.className && element.className.baseVal) || ''} ${className}`
      );
    }
  }
}
