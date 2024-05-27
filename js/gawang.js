import checkCollision from "./utils.js";

class Gawang {
    constructor(game, ball) {
        this.game = game
        this.ball = ball
        this.y = this.game.height - 190;
        this.x = 55;
        this.width = 100;
        this.height = 100;
        this.image = document.getElementById('gawang');
    }
}

export class Gawang1 extends Gawang {
    constructor(game, ball) {
        super(game, ball)
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 100, 100)
    }
    update(){
        if((this.ball.x + this.ball.width / 2) < this.x + this.width){
            this.game.player2Score += 1
            this.game.break = true
        }
    }
}

export class Gawang2 extends Gawang {
    constructor(game, ball) {
        super(game, ball)
        this.x = this.game.width - 50;
    }

    draw(ctx) {
        ctx.save()
        ctx.scale(-1, 1)
        ctx.drawImage(this.image, -this.x, this.y, 100, 100)
        ctx.restore()
    }
    update(){
        if (this.ball.x + this.ball.width / 2 > this.x - this.width) {
            this.game.player1Score += 1
            this.game.break = true
        }
    }
}