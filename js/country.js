export class Country {
    constructor(game) {
        this.game = game;
        this.image1 = document.getElementById(sessionStorage.getItem(`player1flag`) + '-banner');
        this.image2 = document.getElementById(sessionStorage.getItem('player2flag') +  '-banner');

        this.cellSize = 100;
        this.width = this.cellSize;
        this.height = 60
        this.x = 0;
        this.y = 380
    }

    draw(ctx){
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                ctx.drawImage(this.image1, this.x + this.cellSize * i, this.y, this.width, this.height); 
            } else {
                ctx.drawImage(this.image2, this.x + this.cellSize * i, this.y, this.width, this.height); 
            }
        }
    }
}