class Obstacle{
    constructor (posX, posY, width, height,color, speed, ctx) {
        this.posX = posX
        this.posY = posY
        this.width = width
        this.speed = speed^
        this.interval;
    }

    _drawObstacle(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    _MOVE(){
        // this.interval = setInterval()
        // muevo la x la resto
    }
}