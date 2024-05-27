class Gawang {
    constructor(game) {
        this.game = game
        this.y = this.game.height - 190;
        this.x = 55;
        this.image = document.getElementById('gawang');
    }
}

export class Gawang1 extends Gawang {
    constructor(game) {
        super(game)
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 100, 100)
    }
}

export class Gawang2 extends Gawang {
    constructor(game) {
        super(game)
        this.x = this.game.width - 50;
    }

    draw(ctx) {
        ctx.save()
        ctx.scale(-1, 1)
        ctx.drawImage(this.image, -this.x, this.y, 100, 100)
        ctx.restore()
    }
}