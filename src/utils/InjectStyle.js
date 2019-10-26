export class InjectStyle {
  constructor(style) {
    const styleTag = document.createElement('style');
    styleTag.textContent = style;
    styleTag.setAttribute('data-meta', 'tiger-transition');
    this.main = styleTag;
  }

  add() {
    document.head.appendChild(this.main);
  }

  remove() {
    try {
      document.head.removeChild(this.main);
    }
    catch (e) {
      // user clicked fast on link
      // remove() works only on first click
    }
  }
}
