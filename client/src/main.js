
const Phaser = require('phaser');
const HathoraPhaser = require('hathora-phaser');
const BootScene = require('./scenes/BootScene');
const TitleScene = require('./scenes/TitleScreen');
const GameScene = require('./scenes/Arena');

const WEBGL = Phaser.WEBGL;
const Scale = Phaser.Scale;

const config = {
  type: WEBGL,
  scale: {
    width: 1280,
    height: 720,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH
  },
  parent: 'game',
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      // debug: true
    }
  },
  scene: [
    BootScene,
    TitleScene,
    GameScene
  ],
  plugins: {
    scene: [
      {
        key: 'HathoraPhaser',
        mapping: 'HathoraPhaser',
        plugin: HathoraPhaser,
        start: true
      }
    ]
  }
}

new Phaser.Game(config);



// window.addEventListener("load", function () {

// 	var game = new Phaser.Game({
// 		width: 288,
// 		height: 192,
// 		type: Phaser.AUTO,
// 		backgroundColor: "#242424",
// 		scale: {
// 			mode: Phaser.Scale.FIT,
// 			autoCenter: Phaser.Scale.CENTER_BOTH
// 		},
// 		physics: {
// 			default: "arcade",
// 			arcade: {
// 				debug: true,
// 				gravity: {
// 					y: 500
// 				}
// 			}
// 		},
// 		render: {
// 			pixelArt: true,
// 		},
// 		input: {
// 			activePointers: 3
// 		},
// 		plugins: {
// 			scene: [
// 				{
// 					key: 'HathoraPhaser',
// 					mapping: 'HathoraPhaser',
// 					plugin: HathoraPhaser,
// 					start: true
// 				}
// 			]
// 		}
// 	});

// 	game.scene.add("Boot", Boot, true);
// 	game.scene.add("Preloader", Preloader);
// 	game.scene.add("TitleScreen", TitleScreen);
// 	game.scene.add("Arena", Arena);

// });

