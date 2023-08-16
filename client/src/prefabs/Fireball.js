
// You can write more code here

/* START OF COMPILED CODE */

class Fireball extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "spells", frame ?? "Fire_Ball1.png");

		this.setInteractive(new Phaser.Geom.Circle(47, 34, 15.856443859897759), Phaser.Geom.Circle.Contains);
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(64, 64, false);

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
	/** @type {number} */
	speed = 150;
	/** @type {number} */
	size = 0;
	/** @type {string} */
	spellName = "Fireball";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
