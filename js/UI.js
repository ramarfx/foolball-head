export class UI {
    constructor(game) {
        this.game = game
    }
    
    draw(ctx){
        ctx.save()
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 3
        ctx.shadowColor = 'black'
        ctx.shadowBlur = 0
        ctx.fillStyle = 'white'
        ctx.font = '40px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(`${this.game.player1Score} : ${this.game.player2Score}`, 500, 50)
        
        // nama
        ctx.textAlign = 'left'
        ctx.fillText(sessionStorage.getItem('player1'), 50, 50)
        ctx.textAlign = 'right'
        ctx.fillText(sessionStorage.getItem('player2'), this.game.width - 50, 50)


        ctx.restore()
    }
}