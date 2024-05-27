import { UI } from "./UI.js";
import { Background } from "./background.js";
import { Ball } from "./ball.js";
import { InputControl } from "./controls.js";
import { Country } from "./country.js";
import { Gawang1, Gawang2 } from "./gawang.js";
import { Player1, Player2 } from "./player.js";

window.onload = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1000;
  canvas.height = 600;

  const audio = new Audio()
  audio.src = '../assets/audio/backsound.m4a'
  audio.autoplay = true
  audio.loop = true

  window.addEventListener('keyup', (e) => {
    if (e.code === 'KeyM') {
      audio.paused ? audio.play() : audio.pause()
    }
  })

  class Game {
    constructor() {
      this.width = canvas.width;
      this.height = canvas.height;
      this.debug = false;
      this.break = false;
      this.player1Score = 0;
      this.player2Score = 0;
      this.background = new Background(this);
      this.country = new Country(this);
      this.player1 = new Player1(this);
      this.player2 = new Player2(this);
      this.ball = new Ball(this, this.player1, this.player2);
      this.gawang2 = new Gawang2(this, this.ball);
      this.gawang1 = new Gawang1(this, this.ball);
      this.input = new InputControl(this);
      this.ui = new UI(this);
      this.init()
    }

    init(){
      this.background = new Background(this);
      this.country = new Country(this);
      this.player1 = new Player1(this);
      this.player2 = new Player2(this);
      this.ball = new Ball(this, this.player1, this.player2);
      this.gawang2 = new Gawang2(this, this.ball);
      this.gawang1 = new Gawang1(this, this.ball);
      this.input = new InputControl(this);
    }

    draw() {
      this.background.draw(ctx);
      this.country.draw(ctx);
      this.player1.draw(ctx);
      this.player2.draw(ctx);
      this.ball.draw(ctx);
      this.gawang1.draw(ctx);
      this.gawang2.draw(ctx);
      this.ui.draw(ctx);
    }

    update() {
      if (!this.break) {
        this.player1.update(this.input);
        this.player2.update(this.input);

        this.ball.update(this.input)

        this.gawang1.update()
        this.gawang2.update()
      } else {
        console.log(this.player1Score, this.player2Score);
        this.draw()
        this.reset()
      }

      this.ui.draw(ctx)
    }

    reset() {
      this.break = false;
      this.init();
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
