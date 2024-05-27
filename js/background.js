export class Background {
    constructor(game) {
        this.game = game
        this.image = document.getElementById('background1')
    }

    draw(ctx){
        ctx.drawImage(this.image, 0, 0, this.game.width, this.game.height)
    }
}