class Player {
    constructor(posX, posY, width, height, color, ctx ) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
    }

    _drawPlayer(){
       this.ctx.fillStyle = this.color;
       this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
       // this.ctx.drawImage({

        //})
    }

    moveUp() {
        this.posY = this.posY - 50;
    }
    moveDown(){
        this.posY = this.posY + 50;
    }
}