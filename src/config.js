import { AUTO } from 'phaser';
import { GameScene } from './scene';

export default class Config {
    constructor() {
        this.type = AUTO;
        this.width = 1200;
        this.height = 700;
        this.scene = new GameScene();
    }
}
