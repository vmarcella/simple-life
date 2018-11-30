import {Game} from 'phaser';
import {Config} from './config';

var game = new Game(new Config());

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    
}
