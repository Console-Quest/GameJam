import { HathoraPhaser, HathoraConnection } from 'hathora-phaser';

window.addEventListener("load", function () {

	var game = new Phaser.Game({
		width: 288,
		height: 192,
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: true,
				gravity: {
					y: 500
				}
			}
		},
		render: {
			pixelArt: true,
		},
		input: {
			activePointers: 3
		},
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
	});

	game.scene.add("Boot", Boot, true);
	game.scene.add("Preloader", Preloader);
	game.scene.add("TitleScreen", TitleScreen);
	game.scene.add("Arena", Arena);

});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-pack.json");
	}

	create() {

		this.scene.start("Preloader");

		this.HathoraPhaser.initialize(
			'app-79608ab3-d8df-4210-bf26-817a750aa728',
			(connection) => {
				this.scene.start('Preloader', {
					connection
				})
			},
			(error) => {
				console.warn(error)
			},
			true
		)
	}
}