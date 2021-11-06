class Obstacle{
    (posX, posY, speed) {
        this.posX = posX
        this.posY = posY
        this.speed = speed
    }

    _drawObstacle(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    _MOVE(){
        // muevo la x la resto
    }
}