window.addEventListener("load", function () {
    console.log("loaded");
    function generateGame() {
      let canvas = document.querySelector("#fantavision-canvas");
      const ctx = canvas.getContext("2d");
      const game = new Game(ctx);
      game.start();
    }
    generateGame();
})
