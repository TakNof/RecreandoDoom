class Game extends Phaser.Scene{
    constructor(){
        super({key: "Game"});
    }

    preload(){

    }

    create(){
        this.rectangle = this.add.rectangle(200, 200, 64, 64, 0xFFFFFF);
    }

    update(){

    }
}