import {Scene} from 'phaser';

export class GameScene extends Scene {
    constructor() {
        super();
        this.minimap = null;
        this.player = null;
        this.cursors = null;
        this.thrust = null;
        this.flares = null;
        this.bullets = null;
        this.lastFired = 0;
        this.text = null;
    }

    preload() {
        this.load.image('star', 'assets/demoscene/star2.png');
        this.load.image('bigStar', 'assets/demoscene/star3.png');
        this.load.image('ship', 'assets/sprites/shmup-ship2.png');
        this.load.image('bullet', 'assets/sprites/bullets/bullet6.png');
        this.load.image('jets', 'assets/particles/blue.png');
        this.load.imgae('flares', 'assets/particles/yellow.png');
        this.load.image('face', 'assets/sprites/metalface78x92', { frameWidth: 78, frameHeight: 92 });
    }
    
    create() {
        const Bullet = new Phaser.class({
            Extends: Phaser.GameObjects.Image,

:q
:q
exit
        }) 
    }

    update() {

    }

    createBulletEmitter() {

    }

    createStarField() {

    }

    createLandscape() {

    }

    createAliens() {

    }

    createThustEmitter() {
    
    }
}
