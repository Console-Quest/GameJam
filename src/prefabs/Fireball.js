
// You can write more code here

/* START OF COMPILED CODE */

class Fireball extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 650, y ?? 258, texture || "spells", frame ?? "Fire_Ball1.png");

		this.setInteractive(new Phaser.Geom.Circle(32, 32, 32), Phaser.Geom.Circle.Contains);
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setOffset(7, 17);
		this.body.setSize(57, 32, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "TravelingFire_Ball";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	traveling = "TravelingFire_Ball";
	/** @type {string} */
	hitting = "HittingFire_Ball";
	/** @type {boolean} */
	active = true;
	/** @type {any} */
	player = Player;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
