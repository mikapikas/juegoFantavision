class Game{
    constructor(ctx){
        this.player = new Player(50, 275, 50, 50, "blue", ctx)
        this.obstacle= new Obstacle(850 , 275 , 70, 70, "red", ctx);
        this.ctx = ctx;
        this.obstacles = [];
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

    _generateObstacles(){
        // const obstacle1 = new Obstacles(10, 10, 100, )
        // this.obstacles.push(obstacle1) loop que los guarde
        // otro loop que para cada obstáculo llame a this.obstacles[i]._drawObstacle()
        // llamar funcion _move()
    }

    _clean(){
        this.ctx.clearRect(0,0,900,600);
    }

    _renderGame(){
        this._clean();
        this.player._drawPlayer();
        this.obstacle._drawObstacle();
        window.requestAnimationFrame(this._renderGame.bind(this))
    }

    start(){
        this._assignControl();
        window.requestAnimationFrame(this._renderGame.bind(this))
    }
}