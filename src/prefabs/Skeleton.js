
// You can write more code here

/* START OF COMPILED CODE */

class Skeleton extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "attack2/skeleton2-attack2-1.png");

		this.scaleX = 0.6;
		this.scaleY = 0.6;
		scene.physics.add.existing(this, false);
		this.body.setOffset(65, 100);
		this.body.setSize(80, 49, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "idle/skeleton2-idle";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
