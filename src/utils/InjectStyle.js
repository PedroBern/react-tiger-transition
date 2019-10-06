export class InjectStyle {
  constructor(keyframes) {
    var styleTag = document.createElement("style");
    styleTag.textContent = keyframes;
    this.main = styleTag;
  }

  add() {
    document.head.appendChild(this.main);
  }

  remove() {
    try {
      document.head.removeChild(this.main);
    }
    catch {
      // user clicked fast on link
      // remove() works only on first click
    }
  }
}
