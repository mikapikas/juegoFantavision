class Obstacle {
    constructor(posX, posY, width, height, color, ctx,) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        //this.speed = speed;
        this.ctx = ctx;
        //this.interval = interval;
    }

    _drawObstacle(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    _move(){
        //this.interval = setInterval()
        setInterval(() => {
            this.posX = this.posX - 5;
        }, 300);

    }
}