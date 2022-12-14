import Phaser from 'phaser';

import PacmanScene from './scenes/PacmanScene';
// import Start from './scenes/Start';
import GameOver from './scenes/GameOver';
import easystarjs from 'easystarjs'


const config = {
  type: Phaser.AUTO,
  width: 607,
  height: 703,
  parent: 'phaser-example',
  pixelArt: true,
  backgroundColor: '#1a1a2d',
  zoom: 0.9,
  physics: {
    default: 'arcade',
    arcade: {
      //   gravity: { y: 200 },
      // debug: true,
    },
  },
  scene: [PacmanScene],
  // scene: [Start,PacmanScene, GameOver],

};

export default new Phaser.Game(config);
