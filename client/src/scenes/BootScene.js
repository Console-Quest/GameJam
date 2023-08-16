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