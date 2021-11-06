class Player {
    constructor(posX, posY, width =10, height, color, ctx ) {
        this.posX = posX
        this.posY = posY
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
    }

    _drawPlayer(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    moveUp() {
        // this.y = this.y - 1;
    }
    moveDown(){
        // this.y = this.y +1;
    }
}