export class InputControl {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.onkeydown = (e) => {
      if (this.keys.indexOf(e.code) === -1) {
        this.keys.push(e.code);
      } 
      if (e.code === 'Backquote') {
        this.game.debug = !this.game.debug;
      }

      console.log(this.keys);
    };
    window.onkeyup = (e) => {
      this.keys.splice(this.keys.indexOf(e.code), 1);
    };
  }
}
