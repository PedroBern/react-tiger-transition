// copy from
// https://github.com/react-bootstrap/dom-helpers/blob/master/src/removeClass.ts

function replaceClassName(origClass, classToRemove) {
  return origClass
    .replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}

export function removeClass(
  element,
  className
) {
  if (element.classList) {
    element.classList.remove(className)
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(
      element.className,
      className
    )
  } else {
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className
      )
    )
  }
}
