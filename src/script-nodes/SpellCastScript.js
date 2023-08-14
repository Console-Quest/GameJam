
// You can write more code here

/* START OF COMPILED CODE */

class SpellCastScript extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? null, y ?? null);

		// fireball
		const fireball = new Fireball(scene, null, null);
		this.add(fireball);

		// watershot
		const watershot = new WaterShot(scene, 63, 4);
		this.add(watershot);

		// spellCastScript
		new ScriptNode(this);

		this.fireball = fireball;
		this.watershot = watershot;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Fireball} */
	fireball;
	/** @type {WaterShot} */
	watershot;
	/** @type {any} */
	player = Player;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
