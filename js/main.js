import { Background } from "./background.js";
import { InputControl } from "./controls.js";
import { Country } from "./country.js";
import { Player1, Player2 } from "./player.js";

window.onload = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1000;
  canvas.height = 600;

  class Game {
    constructor() {
      this.width = canvas.width;
      this.height = canvas.height;
      this.background = new Background(this);
      this.player1 = new Player1(this);
      this.player2 = new Player2(this);
      this.country = new Country(this);
      this.input = new InputControl();
    }

    draw() {
      this.background.draw(ctx);
      this.country.draw(ctx);
      this.player1.draw(ctx);
      this.player2.draw(ctx);
    }

    update() {
      this.player1.update(this.input);
      this.player2.update(this.input);
    }
  }

  const game = new Game();

  function animate(timestampt) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.draw();
    game.update();

    requestAnimationFrame(animate);
  }

  animate(0);
};
