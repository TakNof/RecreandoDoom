let canvasSize = {width: 1024, height: 768};

let config = {
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    width: canvasSize.width,
    height: canvasSize.height,
    scene: [Game]
}

const game = new Phaser.Game(config);