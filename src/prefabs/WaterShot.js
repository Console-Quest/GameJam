
// You can write more code here

/* START OF COMPILED CODE */

class WaterShot extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 35, y ?? 33, texture || "spells", frame ?? "Water1.png");

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setOffset(34, 23);
		this.body.setSize(29, 19, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	traveling = "TravelingWater";
	/** @type {string} */
	hitting = "HittingWater";
	/** @type {boolean} */
	active = true;
	/** @type {any} */
	player = Player;
	/** @type {number} */
	speed = 150;
	/** @type {number} */
	size = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
