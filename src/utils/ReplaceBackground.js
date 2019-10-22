export class ReplaceBackground {
  constructor(color='#333') {
    this.originalColor = document.body.style.backgroundColor;
    this.fakeColor = color;
  }

  fake() {
    if (document.body.style.backgroundColor !== this.fakeColor)
    document.body.style.backgroundColor = this.fakeColor;
  }

  original() {
    if (document.body.style.backgroundColor !== this.originalColor)
    document.body.style.backgroundColor = this.originalColor;
  }
}
