import checkCollision from "./utils.js"

export class Ball {
    constructor(game, player1, player2) {
        this.game = game
        this.player1 = player1
        this.player2 = player2
        this.size = 50
        this.width = this.size
        this.height = this.size
        this.x = this.game.width / 2 - (this.size / 2)
        this.y = this.game.height / 2 + 150
        this.image = document.getElementById(sessionStorage.getItem('ball'))
    }

    draw(ctx) {
        if (this.game.debug) ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(){
        if (checkCollision(this, this.player1)) {
            this.x += 10
        }
        if (checkCollision(this, this.player2)) {
            this.x -= 10
        }
    }
}