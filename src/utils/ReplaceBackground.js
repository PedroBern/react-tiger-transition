export class ReplaceBackground {
  constructor(color='#333') {
    this.originalColor = document.body.style.backgroundColor;
    this.fakeColor = color;
  }

  fake() {
    document.body.style.backgroundColor = this.fakeColor;
  }

  original() {
    document.body.style.backgroundColor = this.originalColor;
  }
}
