import {Scene} from 'phaser';

export class GameScene extends Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
        const logo = this.add.image(600, 300, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}
