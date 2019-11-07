// postcss injectStyle function

import { prefixer } from './prefixer';

export function styleInject(css, name, ref = {}) {

  const created = document.querySelector(`[data-meta=${name}]`);
  if (created) created.remove();

  const { insertAt } = ref;

  if (!css || typeof document === 'undefined') {
    return;
  }

  const computedCSS = prefixer(css);

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-meta', name);

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    }
    else {
      head.appendChild(style);
    }
  }
  else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = computedCSS;
  }
  else {
    style.appendChild(document.createTextNode(computedCSS));
  }
}
