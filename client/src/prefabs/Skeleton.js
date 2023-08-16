
// You can write more code here

/* START OF COMPILED CODE */

class Skeleton extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "attack2/skeleton2-attack2-1.png");

		this.scaleX = 0.6;
		this.scaleY = 0.6;

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// attackPlayer
		const attackPlayer = new AttackPlayer(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "idle/skeleton2-idle";

		// attackPlayer (prefab fields)
		attackPlayer.target;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	health = 10;
	/** @type {number} */
	attack = 2;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
