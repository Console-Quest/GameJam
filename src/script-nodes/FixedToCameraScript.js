
// You can write more code here

/* START OF COMPILED CODE */

class FixedToCameraScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	player;

	/* START-USER-CODE */

	awake() {
		if (this.player) {
			// This will set the camera to follow the player
			this.scene.cameras.main.startFollow(this.player);

			// This disables the scroll factor for the game object itself
			// If you still want the game object to be fixed relative to the camera
			// even after camera starts following the player, you can keep the below line.
			this.gameObject.setScrollFactor(0, 0);
		} else {
			console.error("Player reference not set in FixedToCameraScript!");
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
