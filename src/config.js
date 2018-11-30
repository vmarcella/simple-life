import {AUTO} from 'phaser';
import {GameScene} from './scene';

export class Config {
    constructor() {
        this.type = AUTO;
        this.width = 800;
        this.height = 600;
        this.scene = new GameScene();
    }
}
