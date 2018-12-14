import { AUTO } from 'phaser';
import { GameScene } from './scene';

export default class Config {
    constructor() {
        this.type = AUTO;
        this.width = 800;
        this.height = 600;
        this.scene = new GameScene();
        this.parent = 'phaser-example'
        this.physics = {
            default: 'impact',
            impact: {
                setBounds: {
                    x: 0,
                    y: 0,
                    width: 3200,
                    height: 600,
                    thickness: 32,
                }
                
            },
        };
    }
}
