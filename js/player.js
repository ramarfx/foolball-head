class Player {
  constructor(game) {
    this.game = game;
    this.x = 200;
    this.y = this.game.height / 2 + 70;
    this.width = 100;
    this.height = 100;
    this.speed = 7;
    this.image = document.getElementById("player1");
  }
}

const player1Flag = sessionStorage.getItem('player1flag')
const player2Flag = sessionStorage.getItem('player2flag')

export class Player1 extends Player {
  constructor(game) {
    super(game);
    this.image = document.getElementById(player1Flag)
  }

  draw(ctx) {
    if (this.game.debug) ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.save()
    ctx.drawImage(this.image,70, 50, 200, 248, this.x, this.y, this.width, this.height);
    ctx.restore()
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
    this.x = this.game.width - 340;
    this.y = this.game.height / 2 + 70;
    this.image = document.getElementById(player2Flag)
  }

  draw(ctx) {
    if (this.game.debug) ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      this.image,
      70, 50, 200, 248,
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
