class Game{
    constructor(ctx){
        this.player = new Player(50, 275, 50, 50, "blue", ctx)
        this.obstacle= new Obstacle(800 , 275 , 70, 70, "red", ctx);
        this.ctx = ctx;
        this.obstacles = [new Obstacle(1000 , 175 , 70, 70, "red", ctx), new Obstacle(1000 , 375 , 70, 70, "red", ctx)];
        this.interval;
    }

    _assignControl() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
              case 'ArrowUp':
                this.player.moveUp();
                break;
              case 'ArrowDown':
                this.player.moveDown();
                break;
              default:
                break;
            }
          });
        }

    _getRandom(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }

    _generateObstacles(){
        this.interval = setInterval(() => {
            const obstacle = new Obstacle(this._getRandom(900, 1500),this._getRandom(0, 570), 70, 70, "red", this.ctx);
            this.obstacles.push(obstacle);
            console.log(obstacle);
            console.log('Array', this.obstacles);
        }, 500);
    }

    _checkCollisions(){
        for (let i = 0; i < this.obstacles.length; i++){
            if(
                this.player.posX <= this.obstacles[i].posX + this.obstacles[i].width &&
                this.player.posX + this.obstacles[i].width >= this.obstacles[i].posX &&
                this.player.posY <= this.obstacles[i].posY + this.obstacles[i].height &&
                this.player.height + this.player.posY >= this.obstacles[i].posY
            ){
                console.log("Game over")
                clearInterval(this.interval);
                // this.ctx.text "Game over"
            }
        }
    }

    _moveObstacles(){
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i]._move();
        }
    }

    _clean(){
        this.ctx.clearRect(0,0,900,600);
    }

    _renderGame(){
        this._clean();
        this.player._drawPlayer();
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i]._drawObstacle();
        }
        this._moveObstacles();
        this._checkCollisions();
       // this.obstacle._drawObstacle();
        window.requestAnimationFrame(this._renderGame.bind(this))
    }

    start(){
        this._assignControl();
        this._generateObstacles();
        window.requestAnimationFrame(this._renderGame.bind(this))
    }
}