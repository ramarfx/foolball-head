export class InputControl {
  constructor() {
    this.keys = [];
    window.onkeydown = (e) => {
      if (this.keys.indexOf(e.code) === -1) {
        this.keys.push(e.code);
      }

      console.log(this.keys);
    };
    window.onkeyup = (e) => {
      this.keys.splice(this.keys.indexOf(e.code), 1);
      console.log(this.keys);
    };
  }
}
