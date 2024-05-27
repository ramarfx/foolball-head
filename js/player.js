class Player {
  constructor(game) {
    this.game = game;
    this.x = 200;
    this.y = this.game.height / 2 + 40;
    this.width = 150;
    this.height = 150;
    this.speed = 5;
    this.image = document.getElementById("player1");
  }
}

const player1Flag = sessionStorage.getItem('player1flag')
const player2Flag = sessionStorage.getItem('player2flag')

// const playerFlag = {
//   player1: document.getElementById(player1Flag),
//   player2: document.getElementById(player2Flag)
// }

export class Player1 extends Player {
  constructor(game) {
    super(game);
    this.image = document.getElementById(player1Flag)
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update(input) {
    if (input.keys.includes("KeyA")) {
      this.x -= this.speed;
    } else if (input.keys.includes("KeyD")) {
      this.x += this.speed;
    } else if (input.keys.includes("KeyS")) {
      this.y += this.speed;
    } else if (input.keys.includes("KeyW")) {
      this.y -= this.speed;
    }

    // batas
    if (this.y <= 330) this.y = 330;
    if (this.y >= 410) this.y = 410;
    if (this.x <= 0) this.x = 0;
  }
}

export class Player2 extends Player {
  constructor(game) {
    super(game);
    this.x = this.game.width - 400;
    this.y = this.game.height / 2 + 40;
    this.image = document.getElementById(player2Flag)
  }

  draw(ctx) {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      this.image,
      -this.x - this.width,
      this.y,
      this.width,
      this.height
    );
    ctx.restore();
  }
  update(input) {
    if (input.keys.includes("ArrowLeft")) {
      this.x -= this.speed;
    } else if (input.keys.includes("ArrowRight")) {
      this.x += this.speed;
    } else if (input.keys.includes("ArrowDown")) {
      this.y += this.speed;
    } else if (input.keys.includes("ArrowUp")) {
      this.y -= this.speed;
    }

    // batas
    if (this.y <= 330) this.y = 330;
    if (this.y >= 410) this.y = 410;
    if (this.x <= 0) this.x = 0;
  }
}
