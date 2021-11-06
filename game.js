class Game{
    constructor(ctx){
        this.player = new Player(50, 275, 50, 50, "blue", ctx)
        this.ctx = ctx;
        this.obstacles = [];
    }

    _assignarControles(){
        // teclas arriba this.player.moveUp()
    }

    _generateObstacles(){
        // const obstacle1 = new Obstacles(10, 10, 100, )
        // this.obstacles.push(obstacle1) loop que los guarde
        // otro loop que para cada obstáculo llame a this.obstacles[i]._drawObstacle()
        // llamar funcion _move()
    }

    _renderGame(){
        this.player._drawPlayer();
        window.requestAnimationFrame(this._renderGame.bind(this))
    }

    start(){
        window.requestAnimationFrame(this._renderGame.bind(this))
        // request animation frame
        // this.player._drawPlayer()
    }
}