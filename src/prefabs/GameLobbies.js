
// You can write more code here

/* START OF COMPILED CODE */

class GameLobbies extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(0, 0, 128, 128);
		rectangle_3.scaleX = 1.2723676012847889;
		rectangle_3.scaleY = 0.907775406702872;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 9473780;
		rectangle_3.fillAlpha = 0.8;
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 2;
		this.add(rectangle_3);

		// lobbyRoom
		const lobbyRoom = new LobbyRoom(scene, -39, -46);
		this.add(lobbyRoom);

		this.lobbyRoom = lobbyRoom;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {LobbyRoom} */
	lobbyRoom;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
