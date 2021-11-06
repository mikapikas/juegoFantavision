class Obstacle {
    constructor(posX, posY, width, height, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        //this.speed = speed;
        //this.interval = interval;
        this.ctx = ctx;
        
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